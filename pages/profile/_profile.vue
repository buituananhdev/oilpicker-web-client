<template>
    <div class="w-full h-fit min-h-[100vh] ">
        <Header
            :isSignIn="true"
            @profile="$router.push('/profile')"
        />
        <div class="w-full profile-container my-4">
            <div class="max-w-[1105px] mx-auto px-2">
                <div class="w-full py-8">
                    <h2 class="font-semibold text-4xl px-4 py-4 text-[#F9982B]">Hồ sơ của tôi</h2>
                    <div class="w-full flex justify-center items-start max-[640px]:flex-col max-[640px]:flex-col-reverse gap-x-10 mt-4">
                        <div class="w-2/3 mt-8 px-4 max-[640px]:w-full relative" >
                            <img src="../../assets/icons/user/edit_icn.svg" alt="" class="cursor-pointer absolute top-[-20px] right-[10px]" width="20" @click="isEdit=!isEdit">
                            <div class="information grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-5 max-[640px]:flex max-[640px]:flex-col ">
                                <div>
                                    <p class="font-[550]">Họ và tên:</p>
                                    <input type="text" name="" id="" placeholder="Tên của bạn" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                                <div>
                                    <p class="font-[550]">Địa chỉ:</p>
                                    <input type="text" placeholder="Email của bạn" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                                <div>
                                    <p class="font-[550]">Số điện thoại:</p>
                                    <input type="number" name="" id="" placeholder="SĐT của bạn" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                                <div>
                                    <p class="font-[550]">Email:</p>
                                    <input type="email" name="" id="" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                                <div>
                                    <p class="font-[550]">Ngân hàng:</p>
                                    <div class="w-full mt-2 max-[768px]:w-full">
                                        <multiselect 
                                            class="multiselect rounded-xl" 
                                            :options="listBanks" 
                                            v-model="user.bankId"
                                            placeholder="Chọn ngân hàng" 
                                            v-validate="'required'"
                                            name="Ngân hàng"
                                            :disabled="!isEdit"
                                        >
                                        </multiselect>
                                    </div>
                                    
                                </div>
                                <div>
                                    <p class="font-[550]">Số tài khoản:</p>
                                    <input type="number" name="" id="" placeholder="STK ngân hàng của bạn" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                            </div>
                            <div class="w-[250px] mt-16 mx-auto">
                                <button class="mx-auto bg-[#FAB823] w-[250px] px-2 py-2 text-white text-lg rounded-2xl text-lg font-semibold text-center" v-if="isEdit">
                                    Cập nhật hồ sơ
                                </button>
                            </div>
                        </div>
                        <div class="text-center w-1/3 max-[640px]:w-full">
                            <div class="mx-auto">
                                <img src="../../assets/images/qr.png" alt="" class="mx-auto rounded-xl mb-4" width="250">
                            </div>
                            <p class="text-lg ">Ngân hàng: Vietcombank</p>
                            <p class="text-lg ">STK: 1022115037</p>
                        </div>
                    </div>
                    <!-- <div class="w-full relative flex justify-start gap-x-5 items-center py-16 px-16 mx-auto my-8 border-2 rounded-2xl max-[640px]:flex-col max-[640px]:px-[20px] max-[1024px]:px-8">
                        <div class="w-2/3 flex flex-col gap-y-10 justify-center max-[640px]:w-full "> 
                            <img 
                                src="../../assets/icons/user/edit_icn.svg" 
                                alt=""
                                width="20"
                                height="20"
                                class="absolute right-[20px] top-[20px] cursor-pointer"
                            >
                            <div class=" py-1.5 gap-x-10 border-b">
                                <span class="w-1/2 min-[640px]:text-end"> Họ và tên:  </span>
                                <span class="w-1/2 max-[640px]:text-end"> {{ user.userName }} </span>
                                <input type="text">
                                
                            </div>
                            <div class="flex justify-center gap-x-10 py-1.5 border-b">
                                <span class="w-1/2 min-[640px]:text-end"> Tên:  </span>
                                <span  class="w-1/2 max-[640px]:text-end"> {{ user.fullName }} </span>
                            </div>
                            <div class="flex justify-center gap-x-10 py-1.5 border-b">
                                <span class="w-1/2 min-[640px]:text-end"> Email:  </span>
                                <span class="w-1/2 max-[640px]:text-end"> {{ user.email }} </span>
                            </div>
                            <div class="flex justify-center gap-x-10 py-1.5 border-b">
                                <span class="w-1/2 min-[640px]:text-end"> Số điện thoại:  </span>
                                <span class="w-1/2 max-[640px]:text-end"> {{ user.phone }} </span>
                            </div>
                            <div class="flex justify-center gap-x-10 py-1.5 border-b">
                                <span class="w-1/2 min-[640px]:text-end"> Giới tính:  </span>
                                <span class="w-1/2 max-[640px]:text-end"> {{  user.gender ? 'Nam' : 'Nữ' }} </span>
                            </div>
                            <div class="flex justify-center gap-x-10 py-1.5 border-b">
                                <span class="w-1/2 min-[640px]:text-end"> Ngày sinh:  </span>
                                <span class="w-1/2 max-[640px]:text-end"> {{ user.birth }} </span>
                            </div>
                            <button class=" py-2 px-4 rounded bg-orange-200 text-white text-lg w-[100px] mx-auto">
                                Lưu
                            </button>
                        </div>
                        <div class=" w-1/3 max-[640px]:mt-4 max-[640px]:w-full ">
                            <p class="text-xl font-semibold text-center"> Mã QR</p>
                            <img 
                                src="../../assets/images/qr.png" 
                                alt="QR User" 
                                height="120" 
                                width="250" 
                                class="rounded-lg mx-auto w-[250px] h-[250px]"
                            >
                        </div>
                    </div> -->
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
            },
            listBanks: ["VietcomBank", "TechcomBank", "MbBank"],
            isEdit:false

        }
    }
}
</script>