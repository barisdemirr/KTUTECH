import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background-dark text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary p-2 rounded-lg text-white">
                                <span className="material-symbols-outlined block">diamond</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">MidnightElite</span>
                        </div>
                        <p className="text-sm leading-relaxed">Defining the next standard of professional excellence through design, technology, and global connectivity.</p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                                <span className="material-symbols-outlined text-xl">alternate_email</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                                <span className="material-symbols-outlined text-xl">group</span>
                            </a>
                        </div>
                    </div>
                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-primary transition-colors" href="#">Announcements</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Event Calendar</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Member Directory</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Resource Library</a></li>
                        </ul>
                    </div>
                    {/* About */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-primary transition-colors" href="#">Our Story</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Global Hubs</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Subscribe</h4>
                        <p className="text-sm mb-4">Get the latest insights directly to your inbox.</p>
                        <div className="flex flex-col gap-2">
                            <input className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary" placeholder="email@address.com" type="email" />
                            <button className="bg-primary text-white font-bold py-2 rounded-lg hover:opacity-90 transition-opacity">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2024 MidnightElite International. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-white" href="#">Privacy Policy</a>
                        <a className="hover:text-white" href="#">Terms of Service</a>
                        <a className="hover:text-white" href="#">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;