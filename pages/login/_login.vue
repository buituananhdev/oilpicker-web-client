
<script>
export default {
    methods: {
        SignIn() {
            this.$router.push('/');
        }
    }
}
</script>
<template>
    <div class="main-container flex justify-center items-center">
        <div class="login-container flex items-center justify-between">
            <div class="w-1/3 h-full relative flex justify-center items-center mobile-container">
                <div class="login-content w=[318px] h-[450px] flex flex-col justify-center items-center">
                    <img style="width: 280px;" src="../../assets/icons/base/sucodev_logo.png" alt="" class="relative top-10">
                    <h2 class="font-semibold" style="font-size: 27px;">Sign In</h2>
                    <form class="w-full flex flex-col gap-4">
                        <div class="form-row flex flex-col gap-2">
                            <div class="font-normal label">Email <span style="color: #FF3D00;">*</span> </div>
                            <input type="text" placeholder="Your email">
                        </div>
                        <div class="form-row flex flex-col gap-2">
                            <div class="font-normal label">Password <span style="color: #FF3D00;">*</span> </div>
                            <input type="password" placeholder="Your password">
                        </div>
                    </form>
                    <div @click="SignIn()" class="submit-btn flex justify-center items-center w-full">Sign Up</div>
                </div>
            </div>
            <div class="w-2/3 h-full img-3 flex items-center justify-center bg-[#F1F4FA]">
                <img src="../../assets/icons/login/login_icn.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    background: #fff ;
    width: 1140px;
    height: 670px;
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
.img-1 {
    width: 220px;
    height: auto;
}
.img-2 {
    width: 180px;
    height: auto;
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