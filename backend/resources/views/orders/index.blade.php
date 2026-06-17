<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon Clone | Your Orders</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <!-- Top Utility Bar -->
    <nav class="navbar-top">
        <a href="index.html" class="navbar-logo">amazon<span>.clone</span></a>
        <div style="flex: 1;"></div>
        <div class="navbar-links">
            <span class="nav-link">
                <span class="line-1">Hello, {{ $user->name ?? 'Guest' }}</span>
                <span class="line-2">Account & Lists</span>
            </span>
        </div>
    </nav>

    <div class="dashboard-container" style="max-width: 1200px; margin: var(--space-xl) auto; padding: 0 var(--space-lg);">
        <main class="dashboard-content" style="background: white; padding: var(--space-xl); border-radius: var(--radius-md); box-shadow: var(--shadow-card);">
            <h1 style="margin-bottom: var(--space-lg);">Your Orders</h1>
            
            <!-- Orders List Section -->
            <div id="orders-list-section">
                @if(count($orders) > 0)
                    <div class="table-wrapper">
                        <table style="width: 100%;">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($orders as $order)
                                    <tr>
                                        <td>#{{ $order['id'] }}</td>
                                        <td>{{ $order['date'] }}</td>
                                        <td>${{ number_format($order['total'], 2) }}</td>
                                        <td><span class="badge {{ $order['statusClass'] }}">{{ $order['status'] }}</span></td>
                                        <td>
                                            <button class="btn-ghost show-details-btn" data-order="{{ json_encode($order) }}" style="cursor: pointer; text-decoration: underline;">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                @else
                    <p style="color: var(--color-text-secondary);">No orders found.</p>
                @endif
            </div>

            <!-- Order Details Section (Hidden by Default) -->
            <div id="order-details-section" style="display: none;">
                <button id="back-btn" class="btn-secondary" style="margin-bottom: var(--space-md); cursor: pointer; padding: var(--space-xs) var(--space-md); display: inline-flex; align-items: center; gap: var(--space-xs); font-size: 0.875rem;">
                    &larr; Back to Orders
                </button>
                <div class="card" style="border: 1px solid var(--color-border); padding: var(--space-lg);">
                    <h2 id="order-title" style="margin-bottom: var(--space-md); font-size: 1.5rem;">ORDER #</h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-md); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-md);">
                        <div>
                            <p style="margin-bottom: var(--space-xs);"><strong>Order Date:</strong> <span id="order-date"></span></p>
                            <p><strong>Status:</strong> <span id="order-status"></span></p>
                        </div>
                        <div>
                            <p><strong>Shipping Address:</strong></p>
                            <p id="order-address" style="color: var(--color-text-secondary); margin-top: var(--space-xs); line-height: 1.4; white-space: pre-line;"></p>
                        </div>
                    </div>
                    
                    <h3 style="margin-bottom: var(--space-sm); font-size: 1.15rem;">Ordered Items</h3>
                    <div class="table-wrapper" style="margin-bottom: var(--space-md);">
                        <table style="width: 100%;">
                            <thead>
                                <tr style="background: #f3f3f3;">
                                    <th style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: left;">Item</th>
                                    <th style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: center;">Qty</th>
                                    <th style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: right;">Price</th>
                                </tr>
                            </thead>
                            <tbody id="order-items-list">
                                <!-- Populated dynamically -->
                            </tbody>
                        </table>
                    </div>
                    <h3 style="text-align: right; margin-top: var(--space-md);">Total: <span id="order-total" style="color: #B12704;"></span></h3>
                </div>
            </div>
        </main>
    </div>

    <script>
        $(document).ready(function() {
            $('.show-details-btn').click(function(e) {
                e.preventDefault();
                const order = $(this).data('order');
                $('#order-title').text('ORDER #' + order.id);
                $('#order-date').text(order.date);
                $('#order-status').text(order.status).attr('class', 'badge ' + order.statusClass);
                $('#order-address').html(order.address.replace(/\n/g, '<br>'));
                
                const itemsTbody = $('#order-items-list');
                itemsTbody.empty();
                order.items.forEach(function(item) {
                    itemsTbody.append('<tr><td style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: left;">' + item.name + '</td><td style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: center;">' + item.qty + '</td><td style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: right;">$' + item.price.toFixed(2) + '</td></tr>');
                });
                
                $('#order-total').text('$' + order.total.toFixed(2));
                
                $('#orders-list-section').hide();
                $('#order-details-section').show();
            });

            $('#back-btn').click(function(e) {
                e.preventDefault();
                $('#order-details-section').hide();
                $('#orders-list-section').show();
            });
        });
    </script>
</body>
</html>
