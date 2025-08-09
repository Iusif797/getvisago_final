import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can wire this to a logging service if needed
        // eslint-disable-next-line no-console
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl w-full text-center">
                        <h2 className="text-2xl font-bold text-red-600 mb-3">Something went wrong</h2>
                        <p className="text-gray-700">The page failed to render. Please reload the page. If the problem persists, try disabling browser extensions and clearing cache.</p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;


