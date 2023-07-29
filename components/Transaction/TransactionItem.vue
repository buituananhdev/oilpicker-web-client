<template>
    <div 
        class="w-full h-[40px] flex justity-between items-center py-1 px-4" 
        :class="{'bg-transaction': itemIndex % 2 === 1, 'bg-white': itemIndex % 2 === 0}"
    >
        <div class="w-full cursor-pointer text-center flex justify-between items-center  ">
            <p class="w-1/12">
                {{ itemIndex }}
            </p>
            <p class="w-2/12">
                {{ itemProp.date }}
            </p>
            <p  class="w-2/12 ">
                {{ itemProp.driverName }} L
            </p>
            <p class="w-2/12">
                {{ itemProp.price }} VNĐ/L
            </p>
            <p class="w-2/12">
                {{ itemProp.quantity }} VNĐ
            </p>
            <p class="w-2/12">
                {{ itemProp.total }} 
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'itemIndex', 'itemProp' ]
}
</script>