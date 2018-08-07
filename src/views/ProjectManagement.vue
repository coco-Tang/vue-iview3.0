<template>
    <div class="project-management">
        检验项目管理
        <Row>
            <Col>
                <h3>表格分页默认选中</h3>
                <Table 
                    ref="multipleTable" 
                    :columns="columns1" 
                    :data="data1"
                    @on-selection-change="handleSelectionChange"></Table>
                <Page 
                    v-show="data1.length > 0" 
                    :total="totalCount" 
                    @on-change="pageChange"
                    size="small" 
                    show-elevator 
                    show-sizer />

            </Col>
        </Row>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data () {
            return {
                columns1: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'a'
                    },
                    {
                        title: 'Age',
                        key: 'b'
                    },
                    {
                        title: 'Address',
                        key: 'c'
                    }
                ],
                data1: [],
                multipleSelection: [],
                totalCount: 0,
                current_page: 1,
            }
        },
        methods: {
            toggleSelection (rows) {
                if (rows) {
                    this.data1 .forEach(row => {
                        this.$refs.multipleTable.toggleSelection(row);
                    });
                } else {

                }
            },
            handleSelectionChange (val) {
                // console.log('val',val);
                this.multipleSelection = val.map(item => {
                    // console.log('item',item._checked)
                    item._checked = true;
                    return item
                })
                // this.multipleSelection = val;
                console.log('this.multipleSelection',this.multipleSelection)
            },
            pageChange (current_page) {
                // console.log('current_page',current_page);
                this.current_page = current_page;
                this.getTabledata();
                this.data1 = this.multipleSelection;
            },
            getTabledata () {
                axios({url: `http://localhost:10001/api/pagination/${this.current_page}`}).then(res => {
                    // console.log('res',res.data);
                    this.data1 = res.data.data;
                    this.totalCount = res.data.count;
                })
            }
        },
        created () {
            this.getTabledata();
        },
        mounted () {
            // this.toggleSelection(this.data1);
        }
    }
</script>
