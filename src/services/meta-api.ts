'use server';

import { headers } from 'next/headers';
import crypto from 'crypto';

const PIXEL_ID = '2208909466198043';
const ACCESS_TOKEN = 'EAALDYN3Da2EBPCFAhfk89jprFZB3qNDJY3Jx0HlvyLlLLZAAJz3t4bdSF9RAd8U36GoGWMHFofQXxfbpeBWfPOJUMPUDZAnyHrALvEUr03WZBPEjNdmOHPH8gO2HIFLnLg8XURKY27RKDSZAyHZA209qZAk2aZAbDEdd0asEhEJzqXFRF0TZBvSgh83Iwff4T8Di5YAZDZD';
const API_VERSION = 'v20.0';

interface CustomData {
    currency?: string;
    value?: number;
    [key: string]: any;
}

// Function to hash data using SHA-256
function hash(data: string | null | undefined): string | null {
    if (!data) return null;
    return crypto.createHash('sha256').update(data).digest('hex');
}

export async function sendServerEvent(eventName: string, customData?: CustomData) {
    const headersList = headers();
    const eventSourceUrl = headersList.get('referer') || '';
    const userAgent = headersList.get('user-agent') || '';
    // This is a simplified way to get the client IP. In a real production environment
    // you might need to check 'x-forwarded-for' or other headers depending on your proxy/hosting setup.
    const clientIpAddress = headersList.get('x-real-ip') || headersList.get('x-forwarded-for')?.split(',')[0].trim() || '';

    const eventData = {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: eventSourceUrl,
        user_data: {
            client_ip_address: clientIpAddress,
            client_user_agent: userAgent,
            // You can add more user data here if you collect it, e.g., email, phone
            // em: [hash('user@example.com')],
            // ph: [hash('1234567890')],
        },
        custom_data: customData,
    };

    const payload = {
        data: [eventData],
        // Use for testing your events in the Events Manager
        // test_event_code: 'TEST_CODE_HERE' 
    };

    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.error('Meta API Error:', responseData);
            return { success: false, error: responseData };
        }

        console.log('Meta API Event Sent Successfully:', responseData);
        return { success: true, data: responseData };

    } catch (error) {
        console.error('Error sending event to Meta API:', error);
        return { success: false, error: (error as Error).message };
    }
}
