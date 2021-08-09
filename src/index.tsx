/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { configure } from 'mobx';

/* Components */
import { App } from './App';

/* Other */
import { queryClient } from './lib/react-query';
import { StoreProvider } from './lib';

/* Styles */
import 'react-toastify/dist/ReactToastify.css';
import './theme/main.scss';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

render(
    <StoreProvider>
        <QueryClientProvider client = { queryClient }>
            <Router>
                <App />
            </Router>
            <ReactQueryDevtools initialIsOpen = { false } />
        </QueryClientProvider>
    </StoreProvider>,
    document.getElementById('root'),
);
