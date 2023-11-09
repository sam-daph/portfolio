"use client";
import './style.css'
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

import  Image  from 'next/image';


export const Sidebar = () => {

    const pathname = usePathname();
    const router = useRouter();
    const routes = [
        {
            icon: <Image src="/maison.png" width="40" height="40" alt="test"/>,
            href: '/',
            label: 'Accueil',
            pro: false,
        },
        {
            icon: <Image src="/plus.png" width="40" height="40" alt="test"/>,
            href: '/companion/new',
            label: 'Créer',
            pro: true,
        },
        {
            icon: <Image src="/equipement.png" width="40" height="40" alt="test"/>,
            href: '/Feature',
            label: 'Fonctionnalité',
            pro: false,
        },
        {
            icon: <Image src="/a-propos.png" width="40" height="40" alt="test"/>,
            href: '/about',
            label: 'À propos',
            pro: false,
        },
        {
            icon: <Image src="/reglage.png" width="40" height="40" alt="test"/>,
            href: '/settings',
            label: 'Paramètres',
            pro: false,
        },

    ];

    const onNavigate = (url: string, pro: boolean) => {
        return router.push(url)
    }

    return (
        <div className="sidebar">
            <div className='flex justify-center items-center p-3 pt-10 flex-1'>
                <div className='space-y-2'>
                    {routes.map((route) => (
                        <div onClick={() => onNavigate(route.href, route.pro)} key={route.href} className={cn(
                            "routes-icon text-muted-foreground text-xs group flex p-3 w-full justify-start cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                            pathname === route.href && "bg-primary/10 text-primary")}>
                            <div className='flex flex-col gap-y-2 items-center flex-1'>
                                {route.icon}
                                {route.label}
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}