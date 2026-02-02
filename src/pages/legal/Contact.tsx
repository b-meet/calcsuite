import { Mail, MessageSquare, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="bg-slate-900 dark:bg-slate-950 px-8 py-12 text-center">
                        <h1 className="text-3xl font-bold text-white mb-4">Get in Touch</h1>
                        <p className="text-slate-300 dark:text-slate-400">
                            Have a suggestion or found a bug? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="p-8 md:p-12 space-y-10">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Us</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    For general inquiries, partnership opportunities, or support.
                                </p>
                                <a href="mailto:meetbhalodiya1030@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 hover:underline">
                                    meetbhalodiya1030@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Feedback & Suggestions</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    We are always looking to add new calculators. If there is a tool you need that we don't have, let us know!
                                </p>
                                <a href="https://x.com/MeetBhalodiya14" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg transition-colors">
                                    Twitter / X <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 dark:border-slate-700 pt-8 mt-8">
                            <p className="text-slate-500 dark:text-slate-500 text-sm text-center">
                                Calculators provided for informational purposes only. For financial or medical advice, please consult a professional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
