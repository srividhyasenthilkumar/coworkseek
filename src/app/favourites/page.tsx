"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Favourites() {
    const router = useRouter();
    useEffect(() => {
        router.push("/profile?tab=favorites");
    }, [router]);

    return null;
}