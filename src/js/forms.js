// Netlify Forms Handler
class NetlifyFormsHandler {
  constructor() {
    this.init();
  }

  init() {
    // Обробка основної форми зв'язку
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
    }

    // Обробка модальної форми
    const modalForm = document.getElementById('contactForm');
    if (modalForm) {
      modalForm.addEventListener('submit', (e) => this.handleModalForm(e));
    }

    // Обробка форми FAQ
    const faqForms = document.querySelectorAll('form[name="faq-contact"]');
    faqForms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleFaqForm(e));
    });
  }

  async handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('#submit-btn');
    
    // Валідація
    const name = formData.get('name')?.trim();
    const phone = formData.get('phone')?.trim();
    
    if (!name) {
      this.showToast('Будь ласка, введіть ваше ім\'я', 'error');
      return;
    }
    
    if (!phone || phone.length < 10) {
      this.showToast('Будь ласка, введіть коректний номер телефону', 'error');
      return;
    }

    await this.submitForm(form, formData, submitBtn, 'Дякуємо! Ваш запит успішно відправлено. Ми зв\'яжемось з вами найближчим часом.');
  }

  async handleModalForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-button-modal');
    
    // Валідація
    const name = formData.get('userName')?.trim();
    const phone = formData.get('userPhone')?.trim();
    const quantity = formData.get('quantity');
    
    if (!name) {
      this.showModalToast('Будь ласка, введіть ваше ім\'я', 'error');
      return;
    }
    
    if (!phone || phone.length < 10) {
      this.showModalToast('Будь ласка, введіть коректний номер телефону', 'error');
      return;
    }

    if (!quantity || quantity <= 0) {
      this.showModalToast('Будь ласка, введіть кількість стеків', 'error');
      return;
    }

    await this.submitForm(form, formData, submitBtn, 'Дякуємо! Ваш запит успішно відправлено. Ми зв\'яжемось з вами найближчим часом.', true);
  }

  async handleFaqForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Валідація
    const name = formData.get('name')?.trim();
    const phone = formData.get('phone')?.trim();
    
    if (!name) {
      this.showToast('Будь ласка, введіть ваше ім\'я', 'error');
      return;
    }
    
    if (!phone || phone.length < 10) {
      this.showToast('Будь ласка, введіть коректний номер телефону', 'error');
      return;
    }

    await this.submitForm(form, formData, submitBtn, 'Дякуємо! Ваш запит успішно відправлено. Ми зв\'яжемось з вами найближчим часом.');
  }

  async submitForm(form, formData, submitBtn, successMessage, isModal = false) {
    const originalText = submitBtn.textContent;
    
    // Показуємо стан завантаження
    submitBtn.textContent = 'Відправляємо...';
    submitBtn.disabled = true;
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        if (isModal) {
          this.showModalToast(successMessage, 'success');
          setTimeout(() => {
            if (window.contactModalInstance) {
              window.contactModalInstance.close();
            }
          }, 2000);
        } else {
          this.showToast(successMessage, 'success');
        }
        
        // Очищуємо форму
        form.reset();
        
        // Для модальної форми скидаємо кількість до 1
        if (isModal) {
          const quantityInput = form.querySelector('#quantity');
          if (quantityInput) {
            quantityInput.value = '1';
          }
        }
        
      } else {
        throw new Error('Network response was not ok');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = 'Виникла помилка при відправці. Спробуйте ще раз або зв\'яжіться з нами за телефоном.';
      
      if (isModal) {
        this.showModalToast(errorMessage, 'error');
      } else {
        this.showToast(errorMessage, 'error');
      }
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  showToast(message, type) {
    // Створюємо контейнер для тостів якщо його немає
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'fixed top-8 left-1/2 z-50 px-4 space-y-2 w-full max-w-md transform -translate-x-1/2';
      document.body.appendChild(toastContainer);
    }

    // Створюємо тост
    const toast = document.createElement('div');
    toast.className = `toast toast--${type} p-4 rounded-lg shadow-lg text-white text-center transition-all duration-300 transform translate-y-[-20px] opacity-0`;
    toast.textContent = message;

    if (type === 'success') {
      toast.style.background = 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)';
    } else {
      toast.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
    }

    toastContainer.appendChild(toast);

    // Анімація появи
    setTimeout(() => {
      toast.classList.remove('translate-y-[-20px]', 'opacity-0');
    }, 100);

    // Автоматичне видалення
    setTimeout(() => {
      toast.classList.add('translate-y-[-20px]', 'opacity-0');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.remove();
        }
      }, 300);
    }, 5000);
  }

  showModalToast(message, type) {
    const modalToastStack = document.getElementById('modalToastStack');
    if (!modalToastStack) return;

    // Видаляємо існуючі тости
    modalToastStack.innerHTML = '';

    // Створюємо новий тост
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;

    modalToastStack.appendChild(toast);

    // Показуємо тост
    setTimeout(() => {
      toast.classList.add('toast--show');
    }, 100);

    // Автоматичне видалення
    setTimeout(() => {
      toast.classList.remove('toast--show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.remove();
        }
      }, 200);
    }, 5000);
  }
}

// Ініціалізуємо обробник форм
document.addEventListener('DOMContentLoaded', () => {
  new NetlifyFormsHandler();
});

// Експортуємо для використання в інших модулях
window.NetlifyFormsHandler = NetlifyFormsHandler; 