package org.opencb.variant.cli.webservices;


import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/")
@Produces("text/plain")
public class WSServer {

//    protected static ObjectMapper jsonObjectMapper;
//    protected static ObjectWriter jsonObjectWriter;
//    protected ResourceBundle properties;
//    protected File dataDir;
//
//
//    public WSServer(@Context UriInfo uriInfo, @Context HttpServletRequest httpServletRequest) throws IOException {
//        properties = ResourceBundle.getBundle("application");
//        dataDir = new File(properties.getString("DATA.PATH"));
//    }
//
//    @POST
//    @Path("/variants")
//    // @Consumes(MediaType.MULTIPART_FORM_DATA)
//    // @Produces(MediaType.APPLICATION_JSON)
//    public Response getVariantInfo(MultivaluedMap<String, String> postParams) {
//
//
//        HashMap<String, String> map = new LinkedHashMap<>();
//
//
//        for (Map.Entry<String, List<String>> entry : postParams.entrySet()) {
//            map.put(entry.getKey(), StringUtils.join(entry.getValue(), ","));
//        }
//
//        System.out.println(map);
//        List<VariantInfo> list = WSSqliteManager.getRecords(map);
//
//        jsonObjectMapper = new ObjectMapper();
//        jsonObjectWriter = jsonObjectMapper.writer();
//
//
//        String res = null;
//        try {
//            res = jsonObjectMapper.writeValueAsString(list);
//
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
//        }
//
//        return createOkResponse(res);
//    }
//
//    @POST
//    @Path("/effect")
//    public Response getVariantEffect(MultivaluedMap<String, String> postParams) {
//        HashMap<String, String> map = new LinkedHashMap<>();
//
//
//        for (Map.Entry<String, List<String>> entry : postParams.entrySet()) {
//            map.put(entry.getKey(), entry.getValue().get(0));
//        }
//
//        List<VariantEffect> list = WSSqliteManager.getEffect(map);
//
//        jsonObjectMapper = new ObjectMapper();
//        jsonObjectWriter = jsonObjectMapper.writer();
//
//
//        String res = null;
//        try {
//            res = jsonObjectMapper.writeValueAsString(list);
//
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//
//        return createOkResponse(res);
//
//    }
//
//    @POST
//    @Path("/info")
//    public Response getAnalysisInfo(MultivaluedMap<String, String> postParams) {
//
//        HashMap<String, String> map = new LinkedHashMap<>();
//
//
//        for (Map.Entry<String, List<String>> entry : postParams.entrySet()) {
//            map.put(entry.getKey(), entry.getValue().get(0));
//        }
//
//        VariantAnalysisInfo vi = WSSqliteManager.getAnalysisInfo(map);
//
//        jsonObjectMapper = new ObjectMapper();
//        jsonObjectWriter = jsonObjectMapper.writer();
//
//
//        String res = null;
//        try {
//            res = jsonObjectMapper.writeValueAsString(vi);
//
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//
//        return createOkResponse(res);
//    }
//
//    protected Response createErrorResponse(Object o) {
//        String objMsg = o.toString();
//        if (objMsg.startsWith("ERROR:")) {
//            return buildResponse(Response.ok("" + o));
//        } else {
//            return buildResponse(Response.ok("ERROR: " + o));
//        }
//    }
//
//    protected Response createOkResponse(Object o) {
//        return buildResponse(Response.ok(o));
//    }
//
//    protected Response createOkResponse(Object o1, MediaType o2) {
//        return buildResponse(Response.ok(o1, o2));
//    }
//
//    protected Response createOkResponse(Object o1, MediaType o2, String fileName) {
//        return buildResponse(Response.ok(o1, o2).header("content-disposition", "attachment; filename =" + fileName));
//    }
//
//    private Response buildResponse(ResponseBuilder responseBuilder) {
//        return responseBuilder.header("Access-Control-Allow-Origin", "*").build();
//    }
}
