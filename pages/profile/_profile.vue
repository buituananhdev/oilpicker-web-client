<template>
    <div>
        <Header
            :isSignIn="true"
            @profile="profileUser"
        />
        <div class="w-full profile-container my-4">
            <div class=" w-[1000px] mx-auto py-8">
                <h2 class="font-semibold text-xl px-4 py-4 border-b"> Hồ sơ của tôi </h2>
                <div class="w-full relative flex justify-start gap-x-5 items-center py-16 px-32 mx-auto my-8 border-2 rounded-2xl">
                    <img 
                        src="../../assets/icons/user/edit_icn.svg" 
                        alt=""
                        width="20"
                        height="20"
                        class="absolute right-[30px] top-[30px] cursor-pointer"
                    >
                    <div class=" w-2/3 flex flex-col gap-y-10 justify-center "> 
                        <div class="flex justify-center items-center gap-x-10">
                            <span class="w-1/2 text-end"> Tên đăng nhập:  </span>
                            <span class="w-1/2"> {{ user.userName }} </span>
                        </div>
                        <div class="flex justify-center gap-x-10">
                            <span class="w-1/2 text-end"> Tên:  </span>
                            <span  class="w-1/2"> {{ user.fullName }} </span>
                        </div>
                        <div class="flex justify-center gap-x-10">
                            <span class="w-1/2 text-end"> Email:  </span>
                            <span class="w-1/2"> {{ user.email }} </span>
                        </div>
                        <div class="flex justify-center gap-x-10">
                            <span class="w-1/2 text-end"> Số điện thoại:  </span>
                            <span class="w-1/2"> {{ user.phone }} </span>
                        </div>
                        <div class="flex justify-center gap-x-10">
                            <span class="w-1/2 text-end"> Giới tính:  </span>
                            <span class="w-1/2"> {{  user.gender ? 'Nam' : 'Nữ' }} </span>
                        </div>
                        <div class="flex justify-center gap-x-10">
                            <span class="w-1/2 text-end"> Ngày sinh:  </span>
                            <span class="w-1/2"> {{ user.birth }} </span>
                        </div>
                        <button class=" py-2 px-4 rounded bg-orange-200 text-white text-lg w-[100px] mx-auto">
                            Lưu
                        </button>
                    </div>
                    <div class=" w-1/3">
                        <p class="text-xl font-semibold text-center"> Mã QR</p>
                        <img 
                            src="../../assets/images/qr.png" 
                            alt="QR User" 
                            height="120" 
                            width="250" 
                            class="rounded-lg mx-auto"
                        >
                    </div>
                    
                    <!-- <p class="font-semibold text-2xl">
                        User Name
                    </p> -->
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                'userName': 'abc1',
                'fullName' : ' nguyen van abc1',
                'email' : 'abc1@gmail.com',
                'phone' : '0212121242',
                'gender' :true,
                'birth' : '12-12-2011'
            }
        }
    }
}
</script>