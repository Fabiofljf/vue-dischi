<template>
<!-- Quando questo evento viene emesso, insieme all'evento possiamo passare anche un valore come secondo parametro della funzione $emit -->
    <form class="d-flex" @submit.prevent="$emit('eventoPersonalizzato')"> 
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search Disk"
              aria-label="Search"
              :value="searchDisk"
              @input="$emit('input', $event.target.value)"
              @keyup="$emit('eventoPersonalizzato', searchDisk)"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
</template>

<script>

export default({
    name: 'SearchBox',
    props: {
        searchDisk: String // - Per poter usare il v-model direttamente sul componente SearchBox quando poi verrá usato
    }
})
</script>
