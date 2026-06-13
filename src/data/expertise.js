import {
    ShieldCheck,
    Database,
    Server,
    Activity,
    Cpu,
    Layers3,
} from "lucide-react";

export const expertise = [
    {
        title: "Authentication Systems",

        description:
            "JWT authentication, refresh tokens, RBAC, protected routes, and session management.",

        icon: ShieldCheck,
    },

    {
        title: "Redis Architecture",

        description:
            "Caching, token blacklisting, rate limiting, Pub/Sub, and scalable session storage.",

        icon: Database,
    },

    {
        title: "API Engineering",

        description:
            "Scalable REST APIs with validation, middleware architecture, and error handling.",

        icon: Server,
    },

    {
        title: "Real-Time Systems",

        description:
            "Socket.io based messaging, online presence, notifications, and event systems.",

        icon: Activity,
    },

    {
        title: "Backend Scalability",

        description:
            "Modular architecture, reusable services, optimized queries, and clean backend structure.",

        icon: Cpu,
    },

    {
        title: "System Design",

        description:
            "Multi-tenant systems, role isolation, workflow architecture, and database relationships.",

        icon: Layers3,
    },
];