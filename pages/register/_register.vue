
<script>
export default {
    data(){
        return {
            user: {}
        }
    },
    methods: {
        Register() {
            this.$router.push('/login');
        }
    }
}
</script>
<template>
    <div class="main-container">
        <Header
            :isSignIn="false"
        />
        <div class=" flex justify-center items-center">
            <div class="register-container rounded-2xl flex items-center justify-between">
                <div class="w-2/5 h-full mx-auto mt-8 relative flex justify-center items-center mobile-container">
                    <div class="register-content w=[318px] h-[450px] flex flex-col justify-center items-center">
                        <img style="width: 280px;" src="" alt="" class="relative top-10">
                        <h2 class="font-semibold" style="font-size: 27px;"> Đăng kí </h2>
                        <form class="w-full flex flex-col gap-4">
                            <div class="form-row flex flex-col gap-2">
                                <div class="font-normal label">Email <span style="color: #FF3D00;">*</span> </div>
                                <input type="text" placeholder="Your email" v-model="user.email">
                            </div>
                            <div class="form-row flex flex-col gap-2">
                                <div class="font-normal label"> Mật khẩu <span style="color: #FF3D00;">*</span> </div>
                                <input type="password" placeholder="Your password">
                            </div>
                            <div class="form-row flex flex-col gap-2">
                                <div class="font-normal label"> Nhập mật khẩu xác nhận <span style="color: #FF3D00;">*</span> </div>
                                <input type="password" placeholder="Your password" v-model="user.password">
                            </div>
                        </form>
                        <div @click="Register()" class="submit-btn flex justify-center items-center w-full"> Đăng kí</div>
                        <div class=" py-4 ">
                            <p> Bạn đã có tài khoản? <b class="cursor-pointer" @click="$router.push('/login')"> Đăng nhập </b> </p>
                        </div>
                    </div>
                </div>
                <div class="w-3/5 h-full img-3 flex items-center justify-center bg-[#F1F4FA]">
                    <img src="../../assets/icons/login/login_icn.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.register-container {
    background: #fff ;
    width: 1140px;
    height: 600px;
    margin-top: 25px;
    border-radius: 23.7px;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.label {
    font-size: 12px;
}
.submit-btn {
    padding: 8px 40px;
    border-radius: 10px;
    background: #3A36DB;
    color: #FFF;
    font-weight: 600;
    margin-top: 30px;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .register-content {
        width: 100%;
        height: 100%;
        padding: 0 20px;
        justify-content: flex-start;
    }

    .img-3 {
        display: none;
    }

    .mobile-container {
        width: 100%;
    }

    .register-container {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: calc(100% - 40px);
        justify-content: center;
    }
}

</style>