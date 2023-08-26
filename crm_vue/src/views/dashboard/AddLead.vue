<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Add Lead</h1>
            </div>
            <div class="column is-12">
                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Company</label>
                        <diV class="control">
                            <input type="text" class="input" v-model="company"/>
                        </diV>
                    </div>
                    <div class="field">
                        <label>Contact person</label>
                        <diV class="control">
                            <input type="text" class="input" v-model="contact_person"/>
                        </diV>
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <diV class="control">
                            <input type="email" class="input" v-model="email"/>
                        </diV>
                    </div>
                    <div class="field">
                        <label>Phone</label>
                        <diV class="control">
                            <input type="text" class="input" v-model="phone"/>
                        </diV>
                    </div>
                    <div class="field">
                        <label>Website</label>
                        <diV class="control">
                            <input type="text" class="input" v-model="website"/>
                        </diV>
                    </div>
                    <div class="field">
                        <label>Confidence</label>
                        <diV class="control">
                            <input type="number" class="input" v-model="confidence"/>
                        </diV>
                    </div>
                    <div class="field">
                        <label>Estimated value</label>
                        <diV class="control">
                            <input type="number" class="input" v-model="estimated_value"/>
                        </diV>
                    </div>
                    <div class="field">
                        <label>Status</label>
                        <diV class="control">
                            <select class="select is-fullwidth" v-model="status">
                                <option value="new">New</option>
                                <option value="new">Contacted</option>
                                <option value="inprogress">In progress</option>
                                <option value="lost">Lost</option>
                                <option value="won">Won</option>
                            </select>
                        </diV>
                    </div>
                    <div class="field">
                        <label>Priority</label>
                        <diV class="control">
                            <select class="select  is-fullwidth" v-model="priority">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">Heigh</option>
                            </select>
                        </diV>
                    </div>
                    <div class="field">
                        <diV class="control">
                            <button type="number" class="button">Add Lead</button>
                        </diV>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default{
        name: 'AddLead',
        data() {
            return {
                company: '',
                contact_person: '',
                email: '',
                phone: '',
                website: '',
                confidence: 0,
                estimated_value: 0,
                status: 'new',
                priority: 'medium',
                FormData: [

                ]
            }
        },
        methods: {
            async submitForm() {
                this.$store.commit('setIsLoading', true)
                const lead = {
                    company: this.company,
                    contact_person: this.contact_person,
                    email: this.email,
                    phone: this.phone,
                    website: this.website,
                    confidence: this.confidence,
                    estimated_value: this.estimated_value,
                    status: this.status,
                    priority: this.priority,
                }

                await axios
                        .post('/api/v1/leads/', lead)
                        .then(response => {
                            console.log(response.data);
                            this.$router.push('/dashboard/leads/')
                        })
                        .catch(error => {
                            console.log(error);
                        })

                this.$store.commit('setIsLoading', false)
            }
        }
    }
</script>