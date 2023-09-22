<template>
    <div>
        <h2>Welcome to My Portfolio</h2>
        <p>This is a brief introduction about myself.</p>

        <h3>Feedback Form</h3>
        <form @submit.prevent="submitFeedback">
            <label for="email">Email:</label>
            <br><input type="email" id="email" v-model="email">
            <br>
            <label for="feedback">Feedback:</label>
            <br><textarea id="feedback" v-model="feedback"></textarea>
            <br>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "myHome",
    data() {
        return {
            email: "",
            feedback: ""
        }
    },
    methods: {
        submitFeedback() {
            // Handle form submission logic here
            console.log(this.email, this.feedback);
        }
    }
}
</script>

<style scoped>
h2 {
    color: #444;
}
</style>
