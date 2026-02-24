'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useCurrentLocale } from 'next-i18n-router/client';
import { i18nConfig } from '../../i18nConfig';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const currentPathname = usePathname();
    const currentLocale = useCurrentLocale(i18nConfig);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (currentLocale === i18nConfig.defaultLocale && !currentPathname.startsWith(`/${currentLocale}`)) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        }
        router.refresh();
    };

    return (
        <div className="flex items-center gap-2 text-[var(--color-slate-gray)] hover:text-[var(--color-cyan)] transition-colors">
            <Globe className="w-5 h-5" />
            <select
                value={currentLocale}
                onChange={handleChange}
                className="bg-transparent outline-none cursor-pointer uppercase font-medium text-sm border-none appearance-none pr-4 focus:ring-0"
            >
                <option value="en" className="bg-[var(--color-obsidian)] text-[var(--color-slate-gray)]">EN</option>
                <option value="fr" className="bg-[var(--color-obsidian)] text-[var(--color-slate-gray)]">FR</option>
                <option value="de" className="bg-[var(--color-obsidian)] text-[var(--color-slate-gray)]">DE</option>
            </select>
        </div>
    );
}
