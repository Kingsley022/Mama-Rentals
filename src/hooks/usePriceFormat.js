const usePriceFormat = () => {
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return {formatPrice};
}
 
export default usePriceFormat;