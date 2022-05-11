class NameInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'Jane',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({
            value,
        });
        this.props.onChange(value);
    }

    render() {
        return e(
            'div',
            {},
            `${this.props.greeter}, `,
            e(
                'input',
                {
                    type: 'text',
                    value: this.state.value,
                    onChange: this.onChange,
                },
            ),
            '!',
        );
    }
}
