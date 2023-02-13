import { notification } from "antd";

export function showNotification(message, description, type, placement, duration) {
    notification.open({
        message,
        description,
        type,
        placement,
        duration
    })
} 