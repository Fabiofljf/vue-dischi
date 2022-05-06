<template>
    <form class="d-flex" @submit.prevent="$emit('formSubmit')">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search Disk"
              aria-label="Search"
              :value="searchDisk"
              @input="$emit('input', $event.target.value)"
              @keyup="$emit('formSubmit', searchDisk)"
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
        searchDisk: String
    }
})
</script>
