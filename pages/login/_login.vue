
<script>
export default {
    data(){
        return{
            user: {}
        }
    },
    methods: {
        async SignIn() {
            await this.$auth
                    .loginWith('local', {
                        data: {
                            email: this.user.email,
                            password: this.user.password,
                        },
                    })
                    .then((res) => {
                    })
            this.$router.push('/');
        },

    }
}
</script>
<template>
    <div class="main-container bg-gradient-to-r from-white-500 to-orange-300">
        <Header
            :isSignIn="false"
        />
        <div  lass="flex justify-center items-center mx-auto w-full mt-8">
            <div class="login-container mx-auto rounded-2xl mt-8 flex items-center justify-between">
                <div class="w-2/5 h-full relative flex justify-center items-center mobile-container">
                    <div class="login-content w=[318px] h-[450px] flex flex-col justify-center items-center">
                        <img style="width: 280px;" src="" alt="" class="relative top-10">
                        <h2 class="font-semibold" style="font-size: 27px;"> Đăng nhập </h2>
                        <form class="w-full flex flex-col gap-4">
                            <div class="form-row flex flex-col gap-2">
                                <div class="font-normal label">Email <span style="color: #FF3D00;">*</span> </div>
                                <input type="text" placeholder="Email của bạn" v-model="user.email">
                            </div>
                            <div class="form-row flex flex-col gap-2">
                                <div class="font-normal label"> Mật khẩu <span style="color: #FF3D00;">*</span> </div>
                                <input type="password" placeholder="Mật khẩu của bạn" v-model="user.password">
                            </div>
                        </form>
                        <div @click="SignIn()" class="submit-btn flex justify-center items-center w-full"> Đăng nhập </div>
                        <button class="flex justify-center items-center py-2 w-full rounded-[10px] border my-6 gap-x-2"> 
                            <img 
                                src="../../assets/icons/login/google_icn.svg" 
                                alt=""
                                width="20"
                                height="20"
                                class="rounded-2xl "
                            >
                            Đăng nhập với Google 
                        </button>
                        
                        <div class=" py-4 ">
                            <p> Bạn chưa có tài khoản? <b class="cursor-pointer" @click="$router.push('/register')"> Đăng kí </b> </p>
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
.login-container {
    background: #fff ;
    width: 1140px;
    height: 600px;
    border-radius: 23.7px;
    overflow: hidden;
    /* margin-top: 100px ; */
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
    .login-content {
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

    .login-container {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: calc(100% - 40px);
        justify-content: center;
    }
}

</style>