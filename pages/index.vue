<template>
    <div class="main-container overflow-auto">
        <Header 
            :isSignIn="true"
            :order="this.order"
            @profile="profileUser" 
        />
        <div class="max-w-[1105px] mx-auto bg-red my-8">
            <div class="w-full flex justify-between items-center max-[640px]:flex-col my-8 rounded-3xl shadow-custom bg-white">
                <div class="text-center w-1/2 py-8 my-4 min-[640px]:border-r">
                    <p class="text-gray-450">Giá thu mua hiện tại:</p>
                    <h2 class="text-3xl font-semibold">{{ unit_price }} VNĐ/L</h2>
                </div>
                <div class="text-center w-1/2 py-8 relative flex gap-x-10 justify-center">
                    <div v-if="isMoney">
                        <p class="text-gray-450">Tổng số tiền đã giao dịch:</p>
                        <h2 class="text-3xl font-semibold">100.000.000 VNĐ</h2>
                    </div>
                    <div v-else>
                        <p class="text-gray-450">Tổng số lượng dầu đã giao dịch:</p>
                        <h2 class="text-3xl font-semibold">100 lít</h2>
                    </div>
                    <img src="../assets/icons/switch_icn.svg" alt="" class=" cursor-pointer" @click="isMoney=!isMoney">
                    <!-- <input type="checkbox" name="" id="" class=" check__box transition duration-700 ease-in-out" v-model="isMoney"> -->
                </div>
            </div>
        </div>
        <div class="w-full button-home py-8 ">
            <div class="max-w-[1200px] mx-auto">
                <div class="w-full flex justify-between items-center px-4">
                    <button 
                        class="py-[14px] px-8 w-2/5 mx-auto rounded-xl border text-white bg-primary font-semibold text-2xl max-[640px]:w-full "
                        @click="isBook = true"
                    >
                        Đặt lịch lấy dầu
                    </button>
                </div>
            </div>
        </div>
        <div class="transaction-history mt-4 max-w-[1105px] mx-auto ">
            <!-- <h2 class="text-center font-semibold text-2xl py-4">Lịch sử giao dịch</h2> -->
            <div>
                <ul class="py-4 px-4 bg-[#F9982B] cursor-pointer flex justify-between items-center text-center text-white font-semibold rounded-t-xl">
                    <li class="w-1/12">STT</li>
                    <li class="w-2/12">Ngày giao dịch</li>
                    <li class="w-2/12">Số lượng</li>
                    <li class="w-2/12">Đơn giá</li>
                    <li class="w-2/12">Tổng tiền</li>
                    <li class="w-2/12">Phương thức thanh toán</li>
                </ul>
                <div class="text-center flex flex-col gap-y-5" v-if="!isHaveContent">
                    <img src="@/assets/icons/user/file-question_icn.svg" alt="file-rong" height="80" width="130"
                        class="mx-auto mt-6" />
                    <h1 class="text-xl text-[#9fa2b4]">
                        Hãy thực giao giao dịch đầu tiên của bạn nào!
                    </h1>
                </div>
                <TransactionItem v-for="(item, index) in list" :key="item.id" v-else :itemIndex="index" :itemProp="item">
                </TransactionItem>
            </div>
        </div>
        <div class="popup__fill--infomation w-full fixed inset-0 " v-if="isFirst">
            <div class="overlay bg-white fixed inset-0 opacity-80"></div>
            <div class="max-w-[700px] mx-auto relative z-100">
                <div
                    class="popup-fill__profile w-full flex flex-col gap-y-5 bg-white rounded-lg absolute border top-[100px]">
                    <h2 class="text-xl font-semibold border-b py-2 text-center bg-[#F9982B] text-white py-4 rounded-t-xl">
                        Nhập thông tin cá nhân
                    </h2>
                    <div class="flex flex-col gap-y-5 my-6">
                        <div class="flex justify-center items-start gap-x-5">
                            <span class="w-1/4 text-start font-semibold"> Họ và tên:
                                <small class="text-red-500">*</small>
                                </span>
                                <div class="w-1/2">
                                    <input  type="text" class="w-full" name="Tên của bạn" id="" v-model="user.fullname" v-validate="'required'"/>
                                        <p
                                            v-show="errors.has('Tên của bạn')"
                                            class="text-xs text-red-400"
                                            >{{ errors.first('Tên của bạn') }}</p
                                        >
                                </div>
                        </div>
                        <div class="flex justify-center items-start gap-x-5">
                            <span class="w-1/4 text-start font-semibold"> Số điện thoại:
                                <small class="text-red-500">*</small>
                            </span>
                            <div class="w-1/2">
                                <input class="w-full" type="number" name="Số điện thoại" id="" v-model="user.phonenumber" v-validate="'required'" />
                                <span
                                    v-show="errors.has('Số điện thoại')"
                                    class="text-xs text-red-400"
                                    >{{ errors.first('Số điện thoại') }}</span
                                >
                            </div>
                            
                        </div>
                        <div class="flex justify-center items-start gap-x-5">
                            <span class="w-1/4 text-start font-semibold">  Địa chỉ:
                                <small class="text-red-500">*</small>
                            </span>
                            <div class="w-1/2">
                                <input class="w-full" type="text" name="Địa chỉ" id="" v-model="user.address" v-validate="'required'"/>
                                <span
                                    v-show="errors.has('Địa chỉ')"
                                    class="text-xs text-red-400"
                                    >{{ errors.first('Địa chỉ') }}</span
                                >
                            </div>
                        </div>
                        <div class="flex justify-center items-start gap-x-5 w-full">
                            <span class="w-1/4 text-start font-semibold"> Tên ngân hàng:
                                <small class="text-red-500">*</small>
                            </span>
                            <div class="w-1/2">
                                <multiselect 
                                    class="multiselect" 
                                    :options="listBanks" 
                                    v-model="user.bankId"
                                    placeholder="Chọn ngân hàng" 
                                    v-validate="'required'" 
                                    name="Ngân hàng">
                                </multiselect>
                                <span
                                    v-show="errors.has('Ngân hàng')"
                                    class="text-xs text-red-400"
                                    >{{ errors.first('Ngân hàng') }}</span
                                >
                            </div>
                        </div>
                        <div class="flex justify-center gap-x-5">
                            <span class="w-1/4 text-start font-semibold"> Số tài khoản: 
                                <small class="text-red-500">*</small>
                            </span>
                            <div class="w-1/2">
                                <input class="w-full" type="number" name="Số tài khoản" id="" v-model="user.bankNumber" v-validate="'required'"/>
                                <span
                                    v-show="errors.has('Số tài khoản')"
                                    class="text-xs text-red-400"
                                    >{{ errors.first('Số tài khoản') }}</span
                                >
                            </div>
                        </div>
                    </div>

                    <button
                        class="text-center w-1/6 mx-auto bg-primary text-white font-semibold text-xl py-2 px-8 rounded-lg mb-6"
                        @click="saveInformation"
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
        <div class="booking w-full fixed inset-0 z-10" v-if="isBook">
            <div class="overlay bg-white fixed inset-0 opacity-80" @click="isBook = false"></div>
            <div class="max-w-[700px] mx-auto relative z-100">
                <div 
                    class="w-full relative flex flex-col gap-y-5 bg-white rounded-lg absolute border top-[100px]"
                >
                    <h2 class="text-xl font-semibold border-b rounded-t-lg py-4 text-center bg-[#F9982B] text-white"> Đặt lịch lấy dầu </h2>
                    <div class=" flex gap-x-10 w-full justify-center">
                        <div @click="order_type = 1" class="curosr-pointer flex gap-x-2">
                            <div class="check-box">
                                <div class="checked-icn" v-if="order_type == 1"></div> 
                            </div>
                            Đặt lịch lấy ngay
                        </div>
                        <div @click="order_type = 2" class="cursor-pointer flex gap-x-2">
                            <div class="check-box">
                                <div class="checked-icn" v-if="order_type == 2"></div>
                            </div>
                            Đặt lịch định kì
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-5 my-6">
                        <div class="flex justify-center items-start gap-x-5">
                            <span class="w-1/4 text-start font-semibold"> Địa chỉ:
                                <small class="text-red-500">*</small>
                            </span>
                            <div class="w-1/2">
                                <input class="w-full" type="text" name="Địa chỉ" id="" v-model="user.address" v-validate="'required'"/>
                                <span
                                    v-show="errors.has('Địa chỉ')"
                                    class="text-xs text-red-400"
                                    >{{ errors.first('Địa chỉ') }}</span
                                >
                            </div>
                            
                        </div>
                        <div class="flex justify-center items-start gap-x-5 w-full" v-if="order_type == 2">
                            <span class="w-1/4 text-start font-semibold"> Ngày lấy hàng:
                                <small class="text-red-500">*</small>
                            </span>
                            <div class="w-1/2">
                                <multiselect 
                                    name="Ngày"
                                    v-validate="'required'"
                                    class="w-full multiselect rounded-xl" 
                                    :options="listDayOfWeek"
                                    v-model="recurring_day_of_week"
                                    placeholder="Chọn ngày" 
                                >
                                </multiselect>
                                <span
                                    v-show="errors.has('Ngày')"
                                    class="text-xs text-red-400"
                                    >{{ errors.first('Ngày') }}</span
                                >
                            </div>
                            
                        </div>
                        <div class="flex justify-center items-start gap-x-5" v-if="order_type == 2">
                            <span class="w-1/4 text-start font-semibold"> Thời gian:
                                <small class="text-red-500">*</small>
                            </span>
                            <div class="w-1/2">
                                <input class="w-full" type="time" name="Thời gian" id="" v-validate="'required'">
                                <span
                                    v-show="errors.has('Thời gian')"
                                    class="text-xs text-red-400"
                                    >{{ errors.first('Thời gian') }}</span
                                >
                            </div>
                        </div>
                        <div class="flex justify-center items-start gap-x-5">
                            <span class="w-1/4 text-start font-semibold"> Số lượng:
                                <small class="text-red-500">*</small>
                            </span>
                            <div class="w-1/2">
                                <input class="w-full" type="number" name="Số lượng" id="" v-validate="'required'" v-model="quantity">
                                <span
                                    v-show="errors.has('Số lượng')"
                                    class="text-xs text-red-400"
                                    >{{ errors.first('Số lượng') }}</span
                                >
                            </div>
                            
                        </div>
                        <div class="flex justify-center items-start gap-x-5">
                            <span class="w-1/4 text-start font-semibold"> Tổng số tiền: </span>
                            <p class="w-1/2  font-semibold"> {{ quantity * unit_price  }} </p>
                        </div>
                    </div>
                    <button
                        class="text-center w-1/5 mx-auto bg-primary text-white font-semibold text-lg py-2 px-8 rounded-lg mb-6 text-xl"
                        @click="orderBill()"
                    >
                        Đặt lịch
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
            ],
            user: {},
            isFirst: false,
            listBanks: ["VietcomBank", "TechcomBank", "MbBank"],
            isHaveContent: true,
            isBook: false,
            isMoney: true,
            isBookNow: true,
            listDayOfWeek: [
                'Thứ 2',
                'Thứ 3',
                'Thứ 4',
                'Thứ 5',
                'Thứ 6',
                'Thứ 7',
                'Chủ nhật',
            ],
            recurring_day_of_week: '',
            recurring_time: '',
            order_type: 1,
            unit_price: 0,
            quantity: '',
            order: null
        };
    },
    async mounted() {
        this.getBills();
        this.getProfile();
        this.getOilPrice();
        this.getUserOrder();
    },  
    methods: {
        async getUserOrder() {
            try {
                const res = await this.$axios.get('orders/user_orders/' + process.env.USER_ID);
                this.order = res.data.data.find(item => item.order_type === 2);
                console.log(this.order);
            } catch (error) {
                console.log(error);
            }
        },
        async orderBill() {
            try {
                await this.$axios.post('/orders', {
                    user_id: process.env.USER_ID,
                    order_type: this.order_type,
                    recurring_day_of_week: this.recurring_day_of_week,
                    recurring_time: this.recurring_time
                })
                this.$toast.show('Đặt lấy dầu thành công...', {
                    position: 'top-right',
                    duration: 2000,
                });
                this.isBook = false;
            } catch (error) {
                this.$toast.error('Không thể đặt dầu vì đang có đơn hàng...', {
                    position: 'top-right',
                    duration: 2000,
                });
                this.isBook = false;
                console.log(error);
            }
        },
        async getProfile() {
            try {
                const res = await this.$axios.get('/users/' + process.env.USER_ID);
                this.user = res.data.data;
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        },
        async getOilPrice() {
            try {
                const res = await this.$axios.get('/oils');
                this.unit_price = res.data.data.unit_price;
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        },
        profileUser() {
            this.$router.push("/profile");
        },
        saveInformation() {
            this.isFirst = false;
        },
        async getBills() {
            try {
                const res = await this.$axios.get('/bills/user_bills/' + process.env.USER_ID)
                this.list = res.data.data;
                console.log(this.list);
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>
<style scoped>
.check__box{
    position: relative;
    bottom: -20px;
    appearance: none;
    width: 3rem;
    height: 1rem;
    background-color: #092A3B;
    border-radius: 10px;
    margin: 0;
    cursor: pointer;
    border:  solid 1px black;
}
.check__box::before {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #092A3B;
    position: absolute;
    top: 0.05rem;
    left: 0.1rem;
    transition: 0.7s;
}x
.check__box:checked::before {
    left: 1.8rem;
    background-color: #F59E0B;
}
.main-container{
    background: linear-gradient(313deg, rgba(251, 152, 2, 0.20) 0%, rgba(216, 211, 211, 0.00) 100%), #FFF;
    
}
.checked-icn {
    width: 10px;
    height: 10px;
    background: #ffff;
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
    background: #F9982B;
    border-radius: 50%;
}
</style>