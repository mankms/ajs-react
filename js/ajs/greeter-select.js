app.component('greeterSelect', {
    controller: Controller,
    template: `
        <select ng-model="$ctrl.greeter">
            <option
                ng-repeat="greeter in $ctrl.greeters"
                ng-selected="greeter === $ctrl.greeter"
                ng-value="greeter"
            >
                {{ greeter }}
            </option>
        </select>, {{ $ctrl.name }}!
    `,
});

function Controller(
    $scope,
    state,
) {
    const $ctrl = this;

    $ctrl.greeter = state.greeter;
    $ctrl.greeters = [
        'Hello',
        'Hey',
        'Hi',
    ];
    $ctrl.name = state.name;
    $ctrl.state = state;

    $scope.$watch(
        '$ctrl.greeter',
        greeter => state.greeter = greeter,
    );
    $scope.$watch(
        '$ctrl.state.name',
        name => $ctrl.name = name,
    );
}
Controller.$inject = [
    '$scope',
    'state',
];
