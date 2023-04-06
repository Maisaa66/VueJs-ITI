<template>
    <div>
        <h3>Original string: {{ str }}</h3>
        <h3>Capitalized string: {{ capitalize(str) }}</h3>
    </div>
</template>
<script>
// importing the mixin
import capitalizeMixin from '../../mixins/capatilizeMixin';
export default {
    // registering the mixin
    name: "componentA",
    mixins: [capitalizeMixin],
    data() {
        return {
            str: 'componentA'
        };
    },
};
</script>