import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium aliquam similique excepturi maxime cumque accusantium soluta odit eius, eos dolores quod sit ut molestiae accusamus officia. Earum, quidem aliquam!",
    },
    {
        id: 2,
        rating: 9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium aliquam similique excepturi maxime cumque accusantium soluta odit eius, eos dolores quod sit ut molestiae accusamus officia. Earum, quidem aliquam!",
    },
    {
        id: 3,
        rating: 8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium aliquam similique excepturi maxime cumque accusantium soluta odit eius, eos dolores quod sit ut molestiae accusamus officia. Earum, quidem aliquam!",
    },
])