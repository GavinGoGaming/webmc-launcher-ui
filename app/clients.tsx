import { useState, useEffect } from 'react'
'use client';
interface Client {
    name: string;
    url: string;
    type: 'vanilla' | 'modded';
    version: string;
}

// Adjust to some API url
const API_URL = "";

export function useClients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/clients`);
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }
                const data = await response.json();
                setClients(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error occurred'));
                console.error('Error fetching clients:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);
    const refreshClients = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/clients`);
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            const data = await response.json();
            setClients(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        } finally {
            setLoading(false);
        }
    };

    return {
        clients,
        loading,
        error,
        refreshClients
    };
}