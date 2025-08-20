
'use server';
/**
 * @fileoverview Service for sending server-side events to the Meta Conversions API.
 */
import { headers } from 'next/headers';

interface ServerEvent {
    eventName: string;
    eventId: string;
    value?: number;
    currency?: string;
    contentName?: string;
    contentId?: string;
}

export async function sendServerEvent(event: ServerEvent) {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_API_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
        console.warn('Meta Pixel ID or Access Token is not configured. Server-side events will not be sent.');
        return;
    }

    const headersList = headers();
    const fbp = headersList.get('cookie')?.match(/_fbp=([^;]+)/)?.[1];
    const fbc = headersList.get('cookie')?.match(/_fbc=([^;]+)/)?.[1];
    
    const payload = {
        data: [
            {
                event_name: event.eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: event.eventId,
                action_source: 'website',
                user_data: {
                    client_ip_address: headersList.get('x-forwarded-for') || '0.0.0.0',
                    client_user_agent: headersList.get('user-agent') || '',
                    fbp: fbp,
                    fbc: fbc,
                },
                custom_data: {
                    ...(event.value && { value: event.value }),
                    ...(event.currency && { currency: event.currency }),
                    ...(event.contentName && { content_name: event.contentName }),
                    ...(event.contentId && { content_id: event.contentId }),
                },
            },
        ],
        // test_event_code: process.env.META_TEST_EVENT_CODE, // Uncomment for testing
    };

    try {
        const response = await fetch(
            `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );

        const responseData = await response.json();
        if (!response.ok) {
            console.error('Failed to send server-side event to Meta:', responseData);
        } else {
            console.log('Successfully sent server-side event to Meta:', responseData);
        }
    } catch (error) {
        console.error('Error sending server-side event to Meta:', error);
    }
}
