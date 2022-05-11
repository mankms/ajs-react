app.directive('nameInput', () => {
    return {
        controller: Controller,
        controllerAs: '$ctrl',
        link,
        scope: {},
        template: '',
    };
});

function Controller(
    $scope,
    state,
) {
    const $ctrl = this;

    $ctrl.greeter = state.greeter;
    $ctrl.root = null;
    $ctrl.state = state;

    $ctrl.render = render;

    $scope.$watch(
        '$ctrl.state.greeter',
        greeter => {
            $ctrl.greeter = greeter;

            $ctrl.render();
        },
    );

    function render() {
        $ctrl.root.render(e(
            NameInput,
            {
                greeter: $ctrl.greeter,
                onChange: name => $scope.$apply(
                    () => $ctrl.state.name = name
                ),
            },
        ));
    }
}
Controller.$inject = [
    '$scope',
    'state',
];

function link($scope, element, attrs, $ctrl) {
    $ctrl.root = ReactDOM.createRoot(element[0]);

    $ctrl.render();
}
