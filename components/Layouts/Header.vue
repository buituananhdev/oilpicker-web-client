<template>
    <div class="w-full border-b bg-white">
        <div class="max-w-[1200px] mx-auto">
            <div class="header-container flex justify-between items-center w-full py-2 px-4">
                <div @click="goToHomePage" class="cursor-pointer">
                    <img src="../../assets/images/logo.jpg" alt="" height="50" width="50" class="rounded-full ">
                </div>
                <button class="rounded bg-gray-200 py-2 px-4 font-semibold text-lg" v-if="!isSignIn" > Đăng nhập </button>
                <div 
                    v-else 
                    class="flex justify-end items-center gap-x-5 cursor-pointer w-fit"
                    @click="profile"
                >
                    <img 
                        src="../../assets/icons/bell_icn.svg" 
                        alt=""
                        class="mr-4"
                    > | 
                    <img src="../../assets/icons/user/user_icn.svg" alt="">
                    <span class="font-semibold text-lg w-fit">  User Name</span>
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<script>
export default{
    props: [ 'isSignIn' ],
    methods:{
        profile(){
            this.$emit('profile');
        },
        goToHomePage(){
            if(this.isSignIn)
                this.$router.push('/')
        }
    }
}
</script>