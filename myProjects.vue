<template>
    <div>
        <h2>My Projects</h2>
        <input v-model="filter" placeholder="Filter projects">
        <table>
            <thead>
                <tr>
                    <th>Project ID</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in filteredProjects" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.title }}</td>
                    <td>{{ project.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "myProjects",
    data() {
        return {
            filter: "",
            projects: [
                { id: 1, title: "Project 1", description: "Description 1" },
                { id: 2, title: "Project 2", description: "Description 2" },
                { id: 3, title: "Project 3", description: "Description 3" },
                //more projects 
            ]
        }
    },
    computed: {
        filteredProjects() {
            return this.projects.filter(project => project.title.includes(this.filter));
        }
    }
}
</script>

<style scoped>
h2 {
    color: #444;
}
ul {
    list-style-type: none;
    padding-left: 0;
}
</style>
