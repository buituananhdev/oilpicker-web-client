<template>
    <div id="app">
        <button @scroll="loadMore">Load</button>
        <div>
            <div @click="role = 'VIEWER'" style="cursor: pointer">
                <div class="check-box">
                    <div class="checked-icn" v-if="role == 'VIEWER'"></div>
                </div>
            </div>
            <div @click="role = 'EDITOR'" style="cursor: pointer">
                <div class="check-box">
                    <div class="checked-icn" v-if="role == 'EDITOR'"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            companiesdb: [3, 4, 1, 4, 1, 2, 4, 4, 1],
            length: 5,
            role: "",
        };
    },
    methods: {
        loadMore() {
            if (this.length > this.companiesdb.length) return;
            this.length = this.length + 3;
        },
    },
    computed: {
        companiesLoaded() {
            return this.companiesdb.slice(0, this.length);
        },
    },
    mounted() {
        window.addEventListener("scroll", this.loadMore);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.loadMore);
    },
};
</script>
<style scoped>
.checked-icn {
    width: 10px;
    height: 10px;
    background: #008cde;
    border-radius: 50%;
}

.check-box {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px;
    gap: 10px;
    width: 20px;
    height: 20px;
    background: #a3eaff;
    border-radius: 50%;
}
</style>
