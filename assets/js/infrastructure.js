// Script for Enhanced Infrastructure Section
// Enhanced Infrastructure Section Script
document.addEventListener('DOMContentLoaded', function() {
  // Check device capabilities
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const supportsIntersectionObserver = 'IntersectionObserver' in window;
  
  // Infrastructure data with multiple images and detailed content
  const infraDetails = {
    'Cold Rooms': {
      images: [
        { src: 'assets/images/coldroom/coldroom-1.jpg', mobileSrc: 'assets/images/coldroom/coldroom-1.jpg' },
        { src: 'assets/images/coldroom/coldroom-2.jpg', mobileSrc: 'assets/images/coldroom/coldroom-2.jpg' },
      ],
      content: `
        <h4 id="coldRoomsHeading">Temperature Controlled Excellence</h4>
        <p>Our modern cold room facilities maintain precise temperature control, ensuring optimal preservation of all products. With multiple temperature zones ranging from mild chilling to deep freezing, we can accommodate various storage requirements.</p>
        <ul aria-labelledby="coldRoomsHeading">
          <li>Temperature range: -25°C to +5°C</li>
          <li>Total capacity: 500+ metric tons</li>
          <li>24/7 temperature monitoring systems</li>
          <li>Backup power generators for uninterrupted operation</li>
        </ul>
      `
    },

    'Fish Pond': {
      images: [
        { src: 'assets/images/fishpond/fishpond-1.jpg', mobileSrc: 'assets/images/fishpond/fishpond-1.jpg' },
        { src: 'assets/images/fishpond/fishpond-2.jpg', mobileSrc: 'assets/images/fishpond/fishpond-1.jpg' },
        { src: 'assets/images/fishpond/fishpond-3.jpg', mobileSrc: 'assets/images/fishpond/fishpond-3.jpg' },
        { src: 'assets/images/fishpond/fishpond-4.jpg', mobileSrc: 'assets/images/fishpond/fishpond-4.jpg' },
      ],
      content: `
        <h4 id="fishPondHeading">Sustainable Aquaculture Facilities</h4>
        <p>Our state of the art fish ponds are designed for optimal fish health and productivity, featuring advanced water circulation and feeding systems that ensure sustainable aquaculture practices.</p>
        <ul aria-labelledby="fishPondHeading">
          <li>Multiple species cultivation (tilapia, catfish, etc.)</li>
          <li>Automated feeding systems with precise portion control</li>
          <li>Water quality monitoring and filtration systems</li>
          <li>Eco-friendly design minimizing environmental impact</li>
        </ul>
      `
    },

    'Bio Gas Chamber': {
      images: [
        { src: 'assets/images/biogaschamber/biogas-1.jpg', mobileSrc: 'assets/images/biogaschamber/biogas-1.jpg' },
        { src: 'assets/images/biogaschamber/biogas-2.jpg', mobileSrc: 'assets/images/biogaschamber/biogas-2.jpg' },
        { src: 'assets/images/biogaschamber/biogas-3.jpg', mobileSrc: 'assets/images/biogaschamber/biogas-3.jpg' },
        { src: 'assets/images/biogaschamber/biogas-4.jpg', mobileSrc: 'assets/images/biogaschamber/biogas-4.jpg' },
        { src: 'assets/images/biogaschamber/biogas-5.jpg', mobileSrc: 'assets/images/biogaschamber/biogas-5.jpg' },
        { src: 'assets/images/biogaschamber/biogas-6.jpg', mobileSrc: 'assets/images/biogaschamber/biogas-6.jpg' },
      ],
      content: `
        <h4 id="bioGasHeading">Renewable Energy Production</h4>
        <p>Our biogas chambers convert organic waste into clean energy, demonstrating our commitment to sustainable operations and circular economy principles.</p>
        <ul aria-labelledby="bioGasHeading">
          <li>Daily processing capacity: 5 tons of organic waste</li>
          <li>Produces methane for electricity generation</li>
          <li>Reduces greenhouse gas emissions by 80%</li>
          <li>Creates nutrient rich bio-fertilizer as byproduct</li>
        </ul>
      `
    },

    'Lairage': {
      images: [
        { src: 'assets/images/lairage/lairage-1.jpg', mobileSrc: 'assets/images/lairage/lairage-1.jpg' },
        { src: 'assets/images/lairage/lairage-2.jpg', mobileSrc: 'assets/images/lairage/lairage-2.jpg' },
        { src: 'assets/images/lairage/lairage-3.jpg', mobileSrc: 'assets/images/lairage/lairage-3.jpg' },
        { src: 'assets/images/lairage/lairage-4.jpg', mobileSrc: 'assets/images/lairage/lairage-4.jpg' },
        { src: 'assets/images/lairage/lairage-5.jpg', mobileSrc: 'assets/images/lairage/lairage-5.jpg' },
        { src: 'assets/images/lairage/lairage-6.jpg', mobileSrc: 'assets/images/lairage/lairage-6.jpg' },
        { src: 'assets/images/lairage/lairage-7.jpg', mobileSrc: 'assets/images/lairage/lairage-7.jpg' },
      ],
      content: `
        <h4 id="lairageHeading">Humane Animal Holding Facilities</h4>
        <p>Our lairage provides comfortable, stress free holding areas for livestock prior to processing, ensuring animal welfare and meat quality standards.</p>
        <ul aria-labelledby="lairageHeading">
          <li>Spacious, well ventilated holding pens</li>
          <li>Constant access to clean water</li>
          <li>Non-slip flooring for animal safety</li>
          <li>Regular veterinary health inspections</li>
        </ul>
      `
    },

    'Processing Machine': {
      images: [
        { src: 'assets/images/processingmachines/processingmachines-1.jpg', mobileSrc: 'assets/images/processingmachines/processingmachines-1.jpg' },
        { src: 'assets/images/processingmachines/processingmachines-2.jpg', mobileSrc: 'assets/images/processingmachines/processingmachines-2.jpg' },
      ],
      content: `
        <h4 id="processingHeading">State-of-the-Art Processing Equipment</h4>
        <p>Our modern processing machinery ensures efficient, hygienic handling of products while maintaining the highest quality standards throughout the production line.</p>
        <ul aria-labelledby="processingHeading">
          <li>Stainless steel construction for easy sanitation</li>
          <li>Automated systems for consistent quality</li>
          <li>HACCP compliant design</li>
          <li>Energy efficient operation</li>
        </ul>
      `
    },

    'Market': {
      images: [
        { src: 'assets/images/market/market-1.jpg', mobileSrc: 'assets/images/market/market-1.jpg' },
        { src: 'assets/images/market/market-2.jpg', mobileSrc: 'assets/images/market/market-2.jpg' },
        { src: 'assets/images/market/market-3.jpg', mobileSrc: 'assets/images/market/market-3.jpg' },
        { src: 'assets/images/market/market-4.jpg', mobileSrc: 'assets/images/market/market-4.jpg' },
        { src: 'assets/images/market/market-5.jpg', mobileSrc: 'assets/images/market/market-5.jpg' },
        { src: 'assets/images/market/market-6.jpg', mobileSrc: 'assets/images/market/market-6.jpg' },
        { src: 'assets/images/market/market-7.jpg', mobileSrc: 'assets/images/market/market-7.jpg' },
        { src: 'assets/images/market/market-8.jpg', mobileSrc: 'assets/images/market/market-8.jpg' },
        { src: 'assets/images/market/market-9.jpg', mobileSrc: 'assets/images/market/market-9.jpg' },
        { src: 'assets/images/market/market-10.jpg', mobileSrc: 'assets/images/market/market-10.jpg' },
        { src: 'assets/images/market/market-11.jpg', mobileSrc: 'assets/images/market/market-11.jpg' },
      ],
      content: `
        <h4 id="marketHeading">Vibrant Retail Marketplace</h4>
        <p>Our bustling market area connects producers directly with consumers, offering fresh products in a clean, organized environment with transparent pricing.</p>
        <ul aria-labelledby="marketHeading">
          <li>Daily fresh product arrivals</li>
          <li>Hygienic display and storage facilities</li>
          <li>Digital weighing and pricing systems</li>
          <li>Customer friendly layout and design</li>
        </ul>
      `
    },

    'Abattoir': {
      images: [
        { src: 'assets/images/abattoir/abattoir-1.jpg', mobileSrc: 'assets/images/abattoir/abattoir-1.jpg' },
        { src: 'assets/images/abattoir/abattoir-2.jpg', mobileSrc: 'assets/images/abattoir/abattoir-2.jpg' },
        { src: 'assets/images/abattoir/abattoir-3.jpg', mobileSrc: 'assets/images/abattoir/abattoir-3.jpg' },
        { src: 'assets/images/abattoir/abattoir-4.jpg', mobileSrc: 'assets/images/abattoir/abattoir-4.jpg' },
        { src: 'assets/images/abattoir/abattoir-5.jpg', mobileSrc: 'assets/images/abattoir/abattoir-5.jpg' },
        { src: 'assets/images/abattoir/abattoir-6.jpg', mobileSrc: 'assets/images/abattoir/abattoir-6.jpg' },
        { src: 'assets/images/abattoir/abattoir-7.jpg', mobileSrc: 'assets/images/abattoir/abattoir-7.jpg' },
        { src: 'assets/images/abattoir/abattoir-8.jpg', mobileSrc: 'assets/images/abattoir/abattoir-8.jpg' },
      ],
      content: `
        <h4 id="abattoirHeading">Humane and Hygienic Processing</h4>
        <p>Our abattoir meets international standards for animal welfare and food safety, utilizing the most advanced techniques for humane slaughter and hygienic processing.</p>
        <ul aria-labelledby="abattoirHeading">
          <li>EU-standard humane slaughter practices</li>
          <li>Complete traceability from farm to table</li>
          <li>Automated processing lines for efficiency</li>
          <li>Daily sanitation and quality control</li>
        </ul>
      `
    },

    'Delivery Fleet': {
      images: [
        { src: 'assets/images/deliveryfleet/deliveryfleet-1.jpg', mobileSrc: 'assets/images/deliveryfleet/deliveryfleet-1.jpg' },
        { src: 'assets/images/deliveryfleet/deliveryfleet-2.jpg', mobileSrc: 'assets/images/deliveryfleet/deliveryfleet-2.jpg' },
        { src: 'assets/images/deliveryfleet/deliveryfleet-3.jpg', mobileSrc: 'assets/images/deliveryfleet/deliveryfleet-3.jpg' },
        { src: 'assets/images/deliveryfleet/deliveryfleet-4.jpg', mobileSrc: 'assets/images/deliveryfleet/deliveryfleet-4.jpg' },
        { src: 'assets/images/deliveryfleet/deliveryfleet-5.jpg', mobileSrc: 'assets/images/deliveryfleet/deliveryfleet-5.jpg' },
      ],
      content: `
        <h4 id="deliveryHeading">Reliable Cold Chain Logistics</h4>
        <p>Our modern delivery fleet maintains perfect temperature control throughout transportation, ensuring products reach customers in optimal condition.</p>
        <ul aria-labelledby="deliveryHeading">
          <li>Refrigerated and frozen transport options</li>
          <li>Real time GPS tracking and temperature monitoring</li>
          <li>Regularly maintained and sanitized vehicles</li>
          <li>Trained delivery personnel</li>
        </ul>
      `
    },

    'Waste Management': {
      images: [
        { src: 'assets/images/wastemanagement/wastemanagement-1.jpg', mobileSrc: 'assets/images/wastemanagement/wastemanagement-1.jpg' },
        { src: 'assets/images/wastemanagement/wastemanagement-2.jpg', mobileSrc: 'assets/images/wastemanagement/wastemanagement-2.jpg' },
      ],
      content: `
        <h4 id="wasteHeading">Sustainable Waste Solutions</h4>
        <p>Our comprehensive waste management system ensures responsible handling of all byproducts, maximizing recycling and minimizing environmental impact.</p>
        <ul aria-labelledby="wasteHeading">
          <li>Waste segregation at source</li>
          <li>Organic waste conversion to biogas</li>
          <li>Recycling program for packaging materials</li>
          <li>Zero waste to landfill policy</li>
        </ul>
      `
    },

    'Water Treatment': {
      images: [
        { src: 'assets/images/watertank.jpg', mobileSrc: 'assets/images/watertank.jpg' },
      ],
      content: `
        <h4 id="waterHeading">Advanced Water Purification</h4>
        <p>Our water treatment facility ensures all water used in operations meets the highest purity standards, with responsible wastewater treatment protecting local ecosystems.</p>
        <ul aria-labelledby="waterHeading">
          <li>Multi stage filtration and purification</li>
          <li>Water recycling and conservation systems</li>
          <li>Regular quality testing and monitoring</li>
          <li>Environmentally responsible discharge</li>
        </ul>
      `
    }
};

  // DOM elements
  const modal = document.getElementById('infraModal');
  const modalTitle = document.querySelector('#infraModal .modal-title');
  const modalContent = document.getElementById('modalContent');
  const galleryContainer = document.querySelector('.modal-gallery-container');
  const galleryIndicators = document.querySelector('.modal-gallery-indicators');
  const infraItems = document.querySelectorAll('.infra-item');
  let currentInfraIndex = 0;
  const infraKeys = Object.keys(infraDetails);

  // Initialize the module
  function init() {
    setupTouchInteractions();
    setupModal();
    setupAccessibility();
    optimizeImages();
    
    if (supportsIntersectionObserver) {
      setupLazyLoading();
    }
  }

  // Touch device interactions
  function setupTouchInteractions() {
    if (!isTouchDevice) return;

    infraItems.forEach(item => {
      let isRevealed = false;
      
      item.addEventListener('click', function(e) {
        if (!isRevealed) {
          e.preventDefault();
          infraItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          item.classList.add('active');
          isRevealed = true;
        } else if (!e.target.classList.contains('infra-view-more')) {
          e.preventDefault();
        }
      });
    });
    
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.infra-item')) {
        infraItems.forEach(item => {
          item.classList.remove('active');
          item.isRevealed = false;
        });
      }
    });
  }

  // Modal functionality
  function setupModal() {
    document.querySelectorAll('.infra-view-more').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const title = this.getAttribute('data-title');
        openModal(title);
      });
    });
    
    document.querySelector('.modal-nav-prev').addEventListener('click', () => navigateInfra(-1));
    document.querySelector('.modal-nav-next').addEventListener('click', () => navigateInfra(1));
    document.querySelector('#infraModal .infraModalClose').addEventListener('click', closeModal);
    
    document.addEventListener('click', (e) => e.target === modal && closeModal());
    document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal());
  }

  function openModal(title) {
    modalTitle.textContent = title;
    modalContent.innerHTML = infraDetails[title].content;
    loadGallery(title);
    currentInfraIndex = infraKeys.indexOf(title);
    
    if (typeof $(modal).modal === 'function') {
      $(modal).modal('show');
    } else {
      modal.style.display = 'block';
      modal.classList.add('show');
      document.body.classList.add('modal-open');
    }
    
    // Focus trap for accessibility
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.infraModalClose').focus();
  }

  function closeModal() {
    if (typeof $(modal).modal === 'function') {
      $(modal).modal('hide');
    } else {
      modal.style.display = 'none';
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
    modal.setAttribute('aria-hidden', 'true');
  }

  // Gallery functions
  function loadGallery(title) {
    const details = infraDetails[title];
    if (!details) {
      console.error(`No details found for: ${title}`);
      return;
    }

    try {
      galleryContainer.innerHTML = '';
      galleryIndicators.innerHTML = '';
      
      details.images.forEach((imageData, index) => {
        const img = document.createElement('img');
        img.dataset.src = imageData.src;
        img.dataset.srcMobile = imageData.mobileSrc || imageData.src;
        img.alt = `${title} - Image ${index + 1}`;
        img.loading = 'lazy';
        img.classList.toggle('active', index === 0);
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = index === 0 ? '1' : '0';
        galleryContainer.appendChild(img);

        const indicator = document.createElement('button');
        indicator.classList.add('gallery-indicator');
        indicator.classList.toggle('active', index === 0);
        indicator.dataset.index = index;
        indicator.setAttribute('aria-label', `View image ${index + 1} of ${details.images.length}`);
        indicator.addEventListener('click', () => showGalleryImage(index));
        galleryIndicators.appendChild(indicator);
      });

      setupSwipeGestures();
      optimizeImages(); // Ensure proper images are loaded for current device
    } catch (error) {
      console.error(`Error loading gallery for ${title}:`, error);
    }
  }

  function showGalleryImage(index) {
    const images = galleryContainer.querySelectorAll('img');
    const indicators = galleryIndicators.querySelectorAll('.gallery-indicator');
    
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0';
      img.classList.toggle('active', i === index);
    });
    
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
      indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
    });
  }

  function setupSwipeGestures() {
    if (!isTouchDevice) return;

    let touchStartX = 0;
    let touchEndX = 0;
    const swipeArea = document.createElement('div');
    swipeArea.classList.add('swipe-area');
    galleryContainer.appendChild(swipeArea);
    
    swipeArea.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    swipeArea.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const minSwipeDistance = 50;
      const images = galleryContainer.querySelectorAll('img');
      const activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
      
      if (touchStartX - touchEndX > minSwipeDistance) {
        const nextIndex = (activeIndex + 1) % images.length;
        showGalleryImage(nextIndex);
      } else if (touchEndX - touchStartX > minSwipeDistance) {
        const prevIndex = (activeIndex - 1 + images.length) % images.length;
        showGalleryImage(prevIndex);
      }
    }
  }

  // Navigation between infrastructure items
  function navigateInfra(direction) {
    let newIndex = currentInfraIndex + direction;
    newIndex = (newIndex < 0) ? infraKeys.length - 1 : newIndex % infraKeys.length;
    openModal(infraKeys[newIndex]);
  }

  // Performance optimizations
  function optimizeImages() {
    const deviceWidth = window.innerWidth;
    const imagesToOptimize = document.querySelectorAll('[data-src]');
    
    imagesToOptimize.forEach(img => {
      const src = deviceWidth <= 768 ? 
        (img.dataset.srcMobile || img.dataset.src) : 
        img.dataset.src;
      
      if (img.src !== src) {
        img.src = src;
      }
      
      img.sizes = deviceWidth <= 768 ? '100vw' : '50vw';
    });
  }

  function setupLazyLoading() {
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          lazyImageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('[data-src]').forEach(img => {
      lazyImageObserver.observe(img);
    });
  }

  // Accessibility enhancements
  function setupAccessibility() {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'infraModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    
    document.querySelectorAll('[data-title]').forEach(button => {
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('aria-expanded', 'false');
    });
    
    // Update aria-expanded when modal opens/closes
    const modalObserver = new MutationObserver(() => {
      const isOpen = modal.classList.contains('show');
      document.querySelectorAll('[data-title]').forEach(button => {
        button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });
    
    modalObserver.observe(modal, { attributes: true, attributeFilter: ['class'] });
  }

  // Event listeners for responsive behavior
  window.addEventListener('resize', () => {
    optimizeImages();
    
    // Reset gallery image visibility on resize
    const activeImage = galleryContainer.querySelector('img.active');
    if (activeImage) {
      galleryContainer.querySelectorAll('img').forEach(img => {
        img.style.opacity = img === activeImage ? '1' : '0';
      });
    }
  });

  // Initialize the infrastructure section
  init();
});