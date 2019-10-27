<template>
    <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">My Transactions</h1>
            <button class="btn btn-primary btn-sm" @click.prevent="fetchTransactions"> <i class="fa fa-refresh"></i>
                Refresh</button>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary d-none">DataTables Example</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped" id="dataTable" width="100%"
                                cellspacing="0">
                                <thead>
                                    <tr class="text-white bg-primary">
                                        <th>ID</th>
                                        <th>SERVICE</th>
                                        <th>AMOUNT</th>
                                        <th>PAYMENT REF</th>
                                        <th>DATE</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody v-if="transactions.length > 0">
                                    <tr v-for="(transaction, i) in transactions" :key="i">
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ transaction.description }}</td>
                                        <td>{{ transaction.amount_paid.toLocaleString(2) }}</td>
                                        <td>{{ transaction.payment_reference }}</td>
                                        <td>{{ transaction.transaction_date }}</td>
                                        <td>
                                            <button class="btn btn-info btn-icon-split" @click.prevent="viewMore(transaction.id)">
                                                <span class="icon text-white-50">
                                                    <i class="fas fa-eye"></i>
                                                </span>
                                                <span class="text">More</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <nav aria-label="..." v-if="transactions.length > 0" class="float-right">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" @click.prevent="loadMore(links.prev)" href=""
                                            tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item" :class="{active:links.current_page == i}"
                                        v-for="i in range(1, links.last_page)" :key="i">
                                        <a @click.prevent="loadMore(i)" class="page-link" href="">{{ i }}</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" @click.prevent="loadMore(links.next)" href="">Next</a>
                                    </li>
                                </ul>
                            </nav>

                            <div v-if="transactions.length == 0" class="alert alert-info">
                                You have not made any tansactions recently
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="transaction-detail" v-if="selectedTransaction" class="modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered transaction-details" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row no-gutters">
                            <div class="col-sm-5 d-flex justify-content-center bg-primary rounded-left py-4">
                                <div class="my-auto text-center">
                                    <div class="text-17 text-white my-3"><i class="fas fa-building"></i></div>
                                    <h3 class="text-4 text-white font-weight-400 my-3">SPEC</h3>
                                    <div class="text-8 font-weight-500 text-white my-4">{{ selectedTransaction.amount_paid.toLocaleString(2) }}</div>
                                    <p class="text-white">{{ selectedTransaction.transaction_date }}</p>
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <h5 class="text-5 font-weight-400 m-3">Transaction Details
                                    <button type="button" class="close font-weight-400" data-dismiss="modal"
                                        aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                                </h5>
                                <hr>
                                <div class="px-3">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">Payment Amount <span class="float-right text-3">
                                            {{ selectedTransaction.amount_paid.toLocaleString(2) }}
                                        </span>
                                        </li>
                                        <li class="mb-2">Convinience Fee <span class="float-right text-3">100.80</span></li>
                                    </ul>
                                    <hr class="mb-2">
                                    <p class="d-flex align-items-center font-weight-500 mb-4">Total Amount <span
                                            class="text-3 ml-auto">{{ selectedTransaction.amount_paid.toLocaleString(2) }}</span></p>
                                    <ul class="list-unstyled">
                                        <li class="font-weight-500">Paid By:</li>
                                        <li class="text-muted">{{ selectedTransaction.customer_details }}</li>
                                    </ul>
                                    <ul class="list-unstyled">
                                        <li class="font-weight-500">Transaction Ref:</li>
                                        <li class="text-muted">{{ selectedTransaction.payment_reference }}</li>
                                    </ul>
                                    <ul class="list-unstyled">
                                        <li class="font-weight-500">Description:</li>
                                        <li class="text-muted">{{ selectedTransaction.description }}</li>
                                    </ul>
                                    <ul class="list-unstyled">
                                        <li class="font-weight-500">Status:</li>
                                        <li class="text-muted">Completed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {
        FETCH_TRANSACTIONS
    } from '../../../utils/routes'
    export default {
        layout: 'customers',
        data() {
            return {
                transactions: [],
                selectedTransaction: null,
                links: [],
            }
        },
        mounted() {
            this.fetchTransactions();
        },

        methods: {
            async fetchTransactions() {
                await this.$axios.get(FETCH_TRANSACTIONS).then(res => {
                    this.formatData(res.data);
                    console.log(res.data.data);
                })
            },
            async loadMore(key) {
                this.loading = true;
                if ((typeof key) == 'number') {
                    key = this.links.path + '?page=' + key
                }
                console.log(key);
                let {
                    data
                } = await this.$axios.get(key);
                this.loading = false;
                this.formatData(data);
            },
            range(start, end) {
                return Array(end - start + 1).fill().map((_, idx) => start + idx)
            },
            formatData(data) {
                this.transactions = data.data.data;
                //console.log(data); return;
                this.links = {
                    'prev': data.data.prev_page_url,
                    'next': data.data.next_page_url,
                    'last_page': data.data.last_page,
                    'current_page': data.data.current_page,
                    'path': data.data.path
                }
            },
            viewMore(id) {
                this.selectedTransaction = this.transactions.find(trans => trans.id == id);
                setTimeout(() => {
                    $('#transaction-detail').modal('show')
                }, 500);
                console.log(this.selectedTransaction);
            }
        },
    }
</script>

<style lang="css" scoped>

</style>