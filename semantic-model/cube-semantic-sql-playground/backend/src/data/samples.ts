/**
 * Improved Sample Semantic Models (Cube Schemas)
 */

export const sampleSemanticModels = {
  ecommerce: {
    name: 'E-commerce Orders',
    format: 'yaml',
    content: `cubes:
  - name: orders
    sql_table: orders
    title: Orders
    description: Customer order transactions for the e-commerce platform

    joins:
      - name: customers
        relationship: many_to_one
        sql: \${CUBE}.customer_id = \${customers}.id

    measures:
      - name: order_count
        title: Order Count
        description: Total number of orders
        type: count

      - name: total_revenue
        title: Total Revenue
        description: Total revenue generated from orders
        sql: amount
        type: sum
        format: currency

      - name: average_order_value
        title: Average Order Value
        description: Average revenue per order
        sql: amount
        type: avg
        format: currency

      - name: max_order_value
        title: Maximum Order Value
        description: Highest single order amount
        sql: amount
        type: max
        format: currency

      - name: high_value_order_count
        title: High Value Order Count
        description: Orders with amount greater than 1000
        sql: CASE WHEN \${CUBE}.amount > 1000 THEN 1 END
        type: count

    dimensions:
      - name: id
        title: Order ID
        sql: id
        type: number
        primary_key: true

      - name: status
        title: Order Status
        sql: status
        type: string

      - name: customer_id
        title: Customer ID
        sql: customer_id
        type: number

      - name: amount
        title: Order Amount
        sql: amount
        type: number

      - name: created_at
        title: Order Created At
        sql: created_at
        type: time

    segments:
      - name: completed_orders
        title: Completed Orders
        sql: \${CUBE}.status = 'completed'

      - name: high_value_orders
        title: High Value Orders
        sql: \${CUBE}.amount > 1000

    pre_aggregations:
      - name: daily_revenue
        measures:
          - total_revenue
          - order_count
        time_dimension: created_at
        granularity: day

  - name: customers
    sql_table: customers
    title: Customers
    description: Customer master data

    measures:
      - name: customer_count
        title: Customer Count
        description: Total number of customers
        type: count

    dimensions:
      - name: id
        title: Customer ID
        sql: id
        type: number
        primary_key: true

      - name: name
        title: Customer Name
        sql: name
        type: string

      - name: email
        title: Customer Email
        sql: email
        type: string

      - name: city
        title: City
        sql: city
        type: string

      - name: country
        title: Country
        sql: country
        type: string

      - name: created_at
        title: Customer Created At
        sql: created_at
        type: time
`,
  },

  saas: {
    name: 'SaaS Metrics',
    format: 'yaml',
    content: `cubes:
  - name: users
    sql_table: users
    title: Users
    description: Application users and subscription information

    measures:
      - name: user_count
        title: User Count
        description: Total number of users
        type: count

      - name: active_user_count
        title: Active User Count
        description: Number of currently active users
        type: count
        filters:
          - sql: \${CUBE}.is_active = true

    dimensions:
      - name: id
        title: User ID
        sql: id
        type: number
        primary_key: true

      - name: email
        title: User Email
        sql: email
        type: string

      - name: subscription_tier
        title: Subscription Tier
        sql: subscription_tier
        type: string

      - name: is_active
        title: Is Active
        sql: is_active
        type: boolean

      - name: signed_up_at
        title: Signed Up At
        sql: signed_up_at
        type: time

  - name: events
    sql_table: events
    title: Events
    description: User activity and application events

    joins:
      - name: users
        relationship: many_to_one
        sql: \${CUBE}.user_id = \${users}.id

    measures:
      - name: event_count
        title: Event Count
        description: Total number of tracked events
        type: count

      - name: unique_user_count
        title: Unique User Count
        description: Distinct users generating events
        sql: user_id
        type: countDistinct

    dimensions:
      - name: user_id
        title: User ID
        sql: user_id
        type: number

      - name: event_name
        title: Event Name
        sql: event_name
        type: string

      - name: event_time
        title: Event Time
        sql: event_timestamp
        type: time
`,
  },
};

/**
 * Improved Sample Query Specs
 */

export const sampleQuerySpecs = {
  basicQuery: {
    name: 'Basic Revenue by Status',
    content: {
      measures: ['orders.total_revenue', 'orders.order_count'],
      dimensions: ['orders.status'],
      order: [
        { id: 'orders.total_revenue', desc: true },
      ],
      limit: 100,
    },
  },

  timeSeriesQuery: {
    name: 'Daily Revenue Trend',
    content: {
      measures: ['orders.total_revenue', 'orders.order_count'],
      timeDimensions: [
        {
          dimension: 'orders.created_at',
          granularity: 'day',
          dateRange: ['2024-04-16', '2024-05-16'],
        },
      ],
      timezone: 'UTC',
      order: [
        { id: 'orders.created_at', desc: false },
      ],
    },
  },

  filteredQuery: {
    name: 'Completed Orders by City',
    content: {
      measures: ['orders.total_revenue', 'orders.order_count'],
      dimensions: ['customers.city'],
      filters: [
        {
          member: 'orders.status',
          operator: 'equals',
          values: ['completed'],
        },
      ],
      order: [
        { id: 'orders.total_revenue', desc: true },
      ],
      limit: 50,
    },
  },

  complexQuery: {
    name: 'Monthly High-Value Orders',
    content: {
      measures: [
        'orders.total_revenue',
        'orders.average_order_value',
        'orders.order_count',
      ],

      dimensions: ['orders.status'],

      timeDimensions: [
        {
          dimension: 'orders.created_at',
          granularity: 'month',
          dateRange: ['2023-01-01', '2023-12-31'],
        },
      ],

      timezone: 'UTC',

      filters: [
        {
          member: 'orders.status',
          operator: 'equals',
          values: ['completed'],
        },
      ],

      segments: ['orders.high_value_orders'],

      order: [
        { id: 'orders.created_at', desc: false },
        { id: 'orders.total_revenue', desc: true },
      ],

      limit: 100,
    },
  },
};