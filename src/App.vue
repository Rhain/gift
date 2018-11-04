<template>
    <v-app dark>
        <v-toolbar app>
            <v-toolbar-title class="headline">
                <span class="logo-title">GIFT.Casino</span>
            </v-toolbar-title>
            <v-toolbar-items>
                <v-btn flat to="/">
                    0.01ETH

                </v-btn>
                <v-btn flat to="/0.1">
                    0.1ETH

                </v-btn>
                <v-btn flat to="/1">
                    1ETH

                </v-btn>
                <v-btn flat to="/records">记录</v-btn>
                <v-btn flat href="http://vma.isocked.com/#/mail/all">智能合约</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
                <v-btn icon large flat slot="activator">
                    <v-avatar size="30px">
                        <img src="./assets/img/man_5.jpg" alt="avatar"/>
                    </v-avatar>
                </v-btn>
                <v-list class="pa-0">
                    <v-list-tile v-for="(item,index) in items" :to="!item.href ? { name: item.name } : null"
                                 :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled"
                                 :target="item.target" rel="noopener" :key="index">
                        <v-list-tile-action v-if="item.icon">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-dialog
                v-model="dialog"
                max-width="400"
        >
            <v-card>
                <v-card-title class="headline">钱包地址</v-card-title>

                <v-card-text>
                    fiwlkayfoasdnwoioskwoanfakskdfwiejopfajoawueflkasdfl
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="dialog = false"
                    >
                        知道了
                      </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data () {
            let self  = this;
            return {
                dialog: false,
                    items: [
                    {
                        icon: 'account_circle',
                        href: '#',
                        title: '钱包地址',
                        click: () => {
                            self.dialog = true;
                        }
                    },
                    {
                        icon: 'settings',
                        href: '#',
                        title: '设置',
                        click: () => {
                        }
                    }
                ],
            }
        }
    }
</script>

<style>
    .logo-title {
        color: #ef5350;
    }
    .headline{
        margin-right: 20px;
    }
</style>