'use client';
import { Button } from '@/components/atoms/button';
import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="text-lg">Welcome to the dashboard!</p>
            
            <Button variant='destructive'>
                teste
            </Button>

            <Button variant='default'>
                testeqq
            </Button>

        </div>
    );
}

export default Dashboard;