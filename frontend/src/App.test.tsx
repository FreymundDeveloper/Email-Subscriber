import { render } from '@testing-library/react';
import App from './App';
import { Theme } from './themes/theme';
import { Home } from './pages/Home';
import { Form } from './components';

test('Renders App Test', () => {
    render(<App />);
});

test('Renders Home Component Test', () => {
    render(
      <Theme>
          <Home />
      </Theme>
    );
});

test('Renders Form Component Test', () => {
    render(
      <Theme>
          <Form onSubmit={() => {}} />
      </Theme>
    );
});