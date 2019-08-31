var BaseApiUrl = "http://localhost/lab2/index.php/api/News/";

function buildUrl(service) {
    return BaseApiUrl + service;
}

window.onload = function() {

    var app = new Vue({
        el: '#app',
        data: {
            fields: ['id', 'title', 'text', 'actions'],
            news: []
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                var url = buildUrl('getnews');
                axios.get(url).then((response) => {
                    this.news = response.data;
                }).catch(error => { console.log(error) });
            },
            deleteData(id) {

                alertify.confirm("Are you sure to delete !",
                    function() {
                        var url = buildUrl('deletenews/' + id);
                        axios.delete(url).then((response) => {
                            app.getData();
                            console.log(response);
                        }).catch(error => {
                            console.log(error)
                        });
                    },
                    function() {

                    }
                );



            },
            updateData(id) {
                console.log(id);
                if ($("#txtTitle").val() !== '' && $("#txtText").val() !== '') {

                    var data = {
                        'id': id,
                        'title': $("#txtTitle").val(),
                        'text': $("#txtText").val()
                    };
                    var url = buildUrl('updatenews');
                    axios.put(url, data).then((response) => {
                        app.getData();
                        console.log(response);
                    }).catch(error => { console.log(error) });
                } else {
                    alertify.error("Se deben completar los campos");
                }


            },
            insertData() {
                if ($("#txtTitle").val() !== '' && $("#txtText").val() !== '') {
                    var data = new FormData();
                    data.append('title', $("#txtTitle").val());
                    data.append('text', $("#txtText").val());
                    var url = buildUrl('insertnews/');
                    axios.post(url, data).then((response) => {
                        this.closeModal();
                        this.getData();
                        console.log(response);
                    }).catch(error => { console.log(error) });
                } else {
                    alertify.error("Se deben completar los campos");
                }

            },
            insertOrUpdate() {
                if ($("#idNews").text() !== '')
                    this.updateData($("#idNews").text());
                else
                    this.insertData();
            },
            selectData(id) {
                var url = buildUrl('getnews/' + id);
                axios.get(url).then((response) => {
                    $("#txtTitle").val(response.data.title);
                    $("#txtText").val(response.data.text);
                    $("#idNews").text(response.data.id);
                }).catch(error => { console.log(error) });
            },
            newData: function() {
                $("#txtTitle").val("");
                $("#txtText").val("");
                $("#idNews").text("");
            },
            closeModal: function() {
                $("#modalDismiss").click();
            },


        }

    });


}