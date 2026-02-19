export function Header(){
   let head=``;
    head+=`
    <div class="header-content">
        <div class="checkout-header-left-section">
          <a href="index.html">
            <img class="amazon-logo" src="i/amazon-logo.png">
            <img class="amazon-mobile-logo" src="i/amazon-mobile-logo.png">
          </a>
        </div>

        <div class="checkout-header-middle-section X">
          Checkout (<a class="return-to-home-link c"
            href="index.html"></a>)
        </div>

        <div class="checkout-header-right-section">
          <img src="i/icons/checkout-lock-icon.png">
        </div>
      </div>
      `
      document.querySelector('.checkout-header').innerHTML=head;
}