<template>
    <div class="w-full border-b">
        <div class="max-w-[1105px] mx-auto">
            <div class="header-container flex justify-between items-center w-full py-2 px-4 ">
                <div @click="goToHomePage" class="cursor-pointer">
                    <img src="../../assets/icons/header/logo_icn.svg" alt="" height="59" width="160" class="rounded-full ">
                </div>
                <div class="contact flex gap-x-5 font-semibold max-[768px]:hidden ">
                    <img src="../../assets/icons/header/phone_icn.svg" alt="">
                    <span class="text-lg"> {{ order.recurring_day_of_week + order.recurring_time }}</span>
                </div>
                <button class="rounded bg-[#F9982B] text-white py-2 px-4 font-semibold text-lg" v-if="!isSignIn" > Đăng nhập </button>
                <div 
                    v-else 
                    class="flex justify-end items-center gap-x-5 cursor-pointer w-fit text-lg"
                >
                    <img 
                        src="../../assets/icons/header/bell_icn.svg" 
                        alt=""
                        class="mr-4"
                        width="18"
                    > | 
                    <div @click="profile" class="flex justify-end items-center gap-x-2 cursor-pointer w-fit ml-4">
                        <img src="../../assets/icons/user/user_icn.svg" alt="" width="18">
                        <div class="font-semibold text-lg w-fit min-w-[100px] text-center">  User Name</div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<script>
export default{
    props: [ 'isSignIn', 'order'],
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