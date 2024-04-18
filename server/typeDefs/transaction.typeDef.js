const transactionTypeDef = `
    type Transaction {
        _id: ID!
        userId: ID!
        desc: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String
        date: String!
    }

    type Query {
        transactions: [Transaction!]
        transaction(transactionId:ID!): Transaction
    }

    type Mutation {
        createTransaction(input: CreateTransactionInput!): Transaction!
        updateTransaction(input: UpdateTransactionInput!): Transaction!
        deleteTransaction(transactionId:ID!): Transaction!
    }

    input CreateTransactionInput {
        desc: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String
        date: String!
    }

    input UpdateTransactionInput {
        transactionId: ID!
        desc: String
        paymentType: String
        category: String
        amount: Float
        location: String
        date: String
    }

`;

export default transactionTypeDef;
