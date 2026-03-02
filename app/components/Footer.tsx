import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                    <span className="font-bold text-white">HormonicFlow</span>
                </div>
                <div className="flex gap-6 text-sm">
                    <a className="hover:text-white transition-colors" href="#">이용약관</a>
                    <a className="hover:text-white transition-colors" href="#">개인정보처리방침</a>
                    <a className="hover:text-white transition-colors" href="#">문의하기</a>
                </div>
                <p className="text-xs text-slate-600">© 2024 HormonicFlow Inc.</p>
            </div>
        </footer>
    );
}
