import { Mail, MessageSquare, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="bg-slate-900 px-8 py-12 text-center">
                        <h1 className="text-3xl font-bold text-white mb-4">Get in Touch</h1>
                        <p className="text-slate-300">
                            Have a suggestion or found a bug? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="p-8 md:p-12 space-y-10">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">Email Us</h2>
                                <p className="text-slate-600 mb-4">
                                    For general inquiries, partnership opportunities, or support.
                                </p>
                                <a href="mailto:support@calcsuite.in" className="text-blue-600 font-semibold hover:text-blue-700 hover:underline">
                                    support@calcsuite.in
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">Feedback & Suggestions</h2>
                                <p className="text-slate-600 mb-4">
                                    We are always looking to add new calculators. If there is a tool you need that we don't have, let us know!
                                </p>
                                <a href="https://twitter.com/calcsuite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium border border-slate-200 px-4 py-2 rounded-lg transition-colors">
                                    Twitter / X <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-8 mt-8">
                            <p className="text-slate-500 text-sm text-center">
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
