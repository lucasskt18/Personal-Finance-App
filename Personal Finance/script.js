const transactionForm = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const transactionList = document.getElementById('transaction-list');
const balanceDisplay = document.getElementById('balance');

        let balance = 0;

        transactionForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const description = descriptionInput.value;
            const amount = parseFloat(amountInput.value);
            const category = categoryInput.value;

            if (description.trim() === '' || isNaN(amount)) {
                alert('Please enter a valid description and amount.');
                return;
            }

            const transaction = {
                description,
                amount,
                category
            };

            updateBalance(transaction);
            addTransactionToList(transaction);
            clearFormFields();
        });

        function updateBalance(transaction) {
            if (transaction.category === 'income') {
                balance += transaction.amount;
            } else {
                balance -= transaction.amount;
            }
            balanceDisplay.textContent = balance.toFixed(2);
        }

        function addTransactionToList(transaction) {
            const transactionItem = document.createElement('li');
            transactionItem.innerHTML = `${transaction.description} - $${transaction.amount.toFixed(2)}`;
            transactionList.appendChild(transactionItem);
        }

        function clearFormFields() {
            descriptionInput.value = '';
            amountInput.value = '';
        }