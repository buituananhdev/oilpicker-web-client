<template>
    <div 
        class="w-full h-[40px] flex justity-between items-center py-1 px-4" 
        :class="{'bg-transaction': itemIndex % 2 === 1, 'bg-white': itemIndex % 2 === 0}"
    >
        <div class="w-full cursor-pointer text-center flex justify-between items-center  ">
            <p class="w-1/12">
                {{ itemIndex + 1 }}
            </p>
            <p class="w-2/12">
                {{ itemProp.order_date }}
            </p>
            <p  class="w-2/12 ">
                {{ itemProp.order_status }}
            </p>
            <p class="w-2/12">
                {{ itemProp.order_type == 1 ? 'Lấy ngay' : 'Định kỳ' }} VNĐ/L
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'itemIndex', 'itemProp' ]
}
</script>   