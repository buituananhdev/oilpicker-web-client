<!-- <template>
    <div class="main-container overflow-auto">
        <Header
            @profile="profileUser"
        />
        <div class="max-w-[1200px] mx-auto">
            <div class="w-full flex justify-between items-center">
                <div class=" text-center w-1/2 py-8 border-r my-4">
                    <p>Giá thu mua hiện tại: </p>
                    <h2 class="text-3xl font-semibold">12.000 VND/lít</h2> 
                </div>
                <div class=" text-center w-1/2">
                    <p>Tổng số tiền đã giao dịch: </p>
                    <h2 class=" text-3xl font-semibold">100.000.000 VNĐ</h2> 
                </div>
            </div>
        </div>   
        <div class=" w-full button-home py-4 border-y">
            <div class="max-w-[1200px] mx-auto">
                <div class="w-full flex justify-between items-center px-4">
                    <button class=" py-2 px-8 rounded border text-white bg-orange-400 "> Đặt lịch  </button>
                </div>
            </div>
            
        </div>
        <div class="transaction-history mt-4 max-w-[1200px] mx-auto">
            <h2 class="text-center font-semibold text-2xl py-4"> Lịch sử giao dịch </h2>
            <div>
                <ul class="py-4 px-4 bg-[#FFB07F] cursor-pointer flex justify-between items-center text-center ">
                    <li class="w-1/12"> STT </li>
                    <li class="w-2/12"> Ngày giao dịch </li>
                    <li class="w-2/12"> Tên tài xế </li>
                    <li class="w-2/12"> Giá dầu </li>
                    <li class="w-2/12"> Số lượng dầu </li>
                    <li class="w-2/12"> Tổng tiền </li>

                </ul>
                <div class="text-center flex flex-col gap-y-5" v-if="!isHaveContent">
                    <img
                        src="@/assets/icons/user/file-question_icn.svg"
                        alt="file-rong"
                        height="80"
                        width="130"
                        class="mx-auto mt-6"
                    >
                    <h1 class="text-xl text-[#9fa2b4]"> Hãy thực giao giao dịch đầu tiên của bạn nào! </h1>
                </div>
                <TransactionItem 
                    v-for="(item, index) in list" 
                    :key="item.id"
                    v-else
                    :itemIndex="index"
                    :itemProp="item"
                >
                        
                </TransactionItem>
            </div>
            <div class="w-full h-[60px] pb-6 flex justify-end">
                <div
                    class="w-1/3 h-full text-center"
                    v-show="isHaveContent"
                >
                    <span 
                        class="total-page text-center"
                    >
                        Total page: {{ meta.totalPages }}
                    </span>
                    <span class="flex w-[100px] gap-x-5 text-center">
                        <img
                            v-show="meta.hasPreviousPage"
                            style="cursor: pointer"
                            src="@/assets/icons/pagination/chevron-left_icn.svg"
                            alt=""
                            @click="goToPrevPage()"
                        />
                        <p
                            v-show="meta.currentPage >= 3"
                            style="cursor: context-menu"
                            class="cursor-pointer"
                        >
                            ...
                        </p>
                        <p
                            v-show="meta.hasPreviousPage"
                            @click="goToPrevPage()"
                            class="cursor-pointer"
                        >
                            {{ meta.currentPage - 1 }}
                        </p>
                        <p class="bg-[#008cde] py-2 px-4 text-white rounded cursor-pointer">{{ meta.currentPage }}</p>
                        <p
                            v-show="meta.hasNextPage"
                            @click="goToNextPage()"
                        >
                            {{ meta.currentPage + 1 }}
                        </p>
                        <p
                            v-show="meta.currentPage + 1 < meta.totalPages"
                            style="cursor: context-menu"
                            class="cursor-pointer"
                        >
                            ...
                        </p>
                        <img
                            v-show="meta.hasNextPage"
                            style="cursor: pointer"
                            src="@/assets/icons/pagination/chevron-right_icn.svg"
                            alt=""
                            @click="goToNextPage()"
                        />
                    </span>
                </div>
            </div>
        </div>
        <div class="popup__fill--information w-full fixed inset-0">
            <div class="max-w-[700px] mx-auto relative">
                <div class="popup-fill__profile w-full flex flex-col px-4 gap-y-5 py-4 bg-white rounded-lg absolute border top-[100px]">
                    <h2 class=" text-xl font-semibold border-b py-2 text-center "> Nhập thông tin cá nhân </h2>
                    <div class="flex flex-col gap-y-5 my-6">
                        <div class="flex justify-center gap-x-5">
                            <span class="w-1/4 text-start"> Tên: </span>
                            <input class="w-1/2" type="text" name="Tên của bạn" id="" v-model="user.fullname">
                        </div>
                        <div class="flex justify-center gap-x-5">
                            <span class="w-1/4 text-start"> Địa chỉ: </span>
                            <input class="w-1/2" type="text" name="Tên của bạn" id="" v-model="user.address">
                        </div>
                        <div class="flex justify-center items-center gap-x-5 w-full ">
                            <span class="w-1/4 text-start"> Tên ngân hàng: </span>
                            <div class="w-1/2">
                                <multiselect
                                    class="multiselect "
                                    :options="listBanks"
                                    v-model="user.bankId"
                                    placeholder="Chọn ngân hàng"
                                    v-validate="'required'"
                                    name="Ngân hàng"
                                ></multiselect>
                            </div>
                            
                        </div>
                        <div class="flex justify-center gap-x-5 ">
                            <span class="w-1/4 text-start"> Số tài khoản: </span>
                            <input class="w-1/2"  type="number" name="Tên của bạn" id="" v-model="user.bankNumber">
                        </div>
                        <div class="flex justify-center gap-x-5">
                            <span class="w-1/4 text-start"> Số điện thoại: </span>
                            <input class="w-1/2" type="number" name="Tên của bạn" id="" v-model="user.phonenumber">
                        </div>
                    </div>
                    
                    <button 
                        class="text-center w-1/6 mx-auto bg-orange-200 text-white font-semibold text-lg py-1 px-8 rounded-lg mb-6"
                        @click="saveInformation"
                    >
                        Lưu 
                    </button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    'id': 1,
                    'date' :" 12-12-2022",
                    'driverName' :"aido",
                    'price' : 12000,
                    'quantity' :2.5,
                    'total' :30000
                },
                {
                    'id': 2,
                    'date' :" 12-12-2022",
                    'driverName' :"aido",
                    'price' : 12000,
                    'quantity' :2.5,
                    'total' :30000
                },
                {
                    'id': 3,
                    'date' :" 12-12-2022",
                    'driverName' :"aido",
                    'price' : 12000,
                    'quantity' :2.5,
                    'total' :30000
                }

            ],
            user: {
            },
            isFirst: true,
            listBanks: [
                'VietcomBank',
                'TechcomBank',
                'MbBank'
            ],
            isHaveContent: true,
            meta: {

            }
        }
    },
    methods: {
        profileUser(){
            this.$router.push('/profile')
        },
        saveInformation(){
            this.isFirst = false;
        }
    }
}
</script> -->