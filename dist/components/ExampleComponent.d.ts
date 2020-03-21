/// <reference types="react" />
interface ExampleComponentProps {
    text: string;
    onClick: () => void;
}
/**
 * Example component that displays whatever text you provide in a div and registers an onClick handler.
 */
declare function ExampleComponent(props: ExampleComponentProps): JSX.Element;
declare namespace ExampleComponent {
    var defaultProps: {
        onClick: () => void;
        text: string;
    };
}
export default ExampleComponent;
