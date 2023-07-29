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
                                    <input v-model="user.fullname" type="text" name="" id="" placeholder="Tên của bạn" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                                <div>
                                    <p class="font-[550]">Địa chỉ:</p>
                                    <input v-model="user.address" type="text" placeholder="Email của bạn" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                                <div>
                                    <p class="font-[550]">Số điện thoại:</p>
                                    <input v-model="user.phonenumber" type="number" name="" id="" placeholder="SĐT của bạn" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                                <div>
                                    <p class="font-[550]">Email:</p>
                                    <input v-model="user.email" type="email" name="" id="" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
                                </div>
                                <div>
                                    <p class="font-[550]">Ngân hàng:</p>
                                    <div class="w-full mt-2 max-[768px]:w-full">
                                        <multiselect 
                                            class="multiselect rounded-xl" 
                                            :options="listBanks"
                                            label="short_name"
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
                                    <input v-model="user.bankNumber" type="number" name="" id="" placeholder="STK ngân hàng của bạn" class="w-full mt-2 max-[768px]:w-full" :disabled="!isEdit">
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
                                <img :src="user.qrcodeURL" alt="" class="mx-auto rounded-xl mb-4" width="250">
                            </div>
                            <p class="text-lg ">Ngân hàng: MbBank</p>
                            <p class="text-lg ">STK: {{ user.bankNumber }}</p>
                        </div>
                    </div>
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
                
            },
            listBanks: [],
            isEdit:false
        }
    },
    mounted() {
        this.getProfile();
        this.getBanks();
    },  
    methods: {
        async getProfile() {
            try {
                const res = await this.$axios.get('/users/' + process.env.USER_ID);
                this.user = res.data.data;
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        },
        async getBanks() {
            try {
                const res = await this.$axios.get('/banks');
                this.listBanks = res.data.data;

                console.log(this.listBanks);
            } catch (error) {
                console.log(error);
            }
        },
        async updateProfile() {
            try {
                const res = await this.$axios.put('')
            } catch (error) {
                
            }
        }
    }
}
</script>